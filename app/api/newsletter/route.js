import { NextResponse } from "next/server";
import cookie from "cookie";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { data } from "autoprefixer";
import { get, set } from "lodash";
import Cors from "cors";
import NextCors from "nextjs-cors";
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" });
}

// export async function POST(req, res) {
//   try {
//     const data = await req.json();
//     console.log("Received data:", data);

//     const { email } = data;

//     console.log("Processed data:", email);
//     const todoRef = collection(db, "newsletter");
//     console.log("Adding document...");
//     await addDoc(todoRef, {
//       email,
//     })
//       .then(() => {
//         console.log("Document added!");
//         return new NextResponse(201).json({ data: data });
//       })
//       .catch((error) => {
//         console.error("Error adding document:", error);
//         return new NextResponse(500).json({ error: error });
//       });
//   } catch (error) {
//     console.error("Error in POST function:", error);
//     return new NextResponse(500).json({ error: "An error occurred." });
//   }
//   return Response.json(data);
// }

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
  origin: "*", // This will allow access to all resources, or specify origins
});
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const rateLimit = 3; // Number of allowed requests per minute
const rateLimiter = {};

const rateLimiterMiddleware = (ip) => {
  const now = Date.now();
  const windowStart = now - 60 * 1000; // 1 minute ago

  const requestTimestamps = get(rateLimiter, ip, []).filter(
    (timestamp) => timestamp > windowStart
  );
  requestTimestamps.push(now);

  set(rateLimiter, ip, requestTimestamps);

  return requestTimestamps.length <= rateLimit;
};

async function validateEmail(email) {
  if (!email) {
    // throw new Error("Email is required");
    console.log("Email is required");
    Response.json({ error: "Bad requests" }, { status: 402 });
  }

  if (email.length > 100) {
    // throw new Error("Email must be less than 100 characters");
    console.log("Email must be less than 100 characters");
    Response.json({ error: "Bad requests" }, { status: 402 });
  }

  if (email.length < 5) {
    console.log("Email must be at least 5 characters");
    Response.json({ error: "Bad requests" }, { status: 402 });
  }
}
export async function POST(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  await runMiddleware(req, res, cors);
  const ip = req.headers["x-forwarded-for"];

  if (!rateLimiterMiddleware(ip)) {
    console.log("too many requests", " Error 429");
    // return new NextResponse(429).json({ error: "Too many requests" });
    return Response.json({ error: "too many requests" }, { status: 429 });
  }

  try {
    const data = await req.json();
    console.log("Received data:", data);

    const { email } = data;
    await validateEmail(email);
    // Email validation

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      console.log("Invalid email format.", email);
      // return new NextResponse(400).json({ error: "Invalid email format." })
      return Response.json(
        { error: "Invalid email format." },
        { status: 400 },
        { email: email }
      );
    }

    console.log("Processed data:", email);
    const todoRef = collection(db, "newsletter");
    console.log("Adding document...");
    await addDoc(todoRef, {
      email,
    })
      .then(() => {
        console.log("Document added!");
        return new NextResponse(201).json({ data: data });
      })
      .catch((error) => {
        console.error("Error adding document:", error);
        return new NextResponse(500).json({ error: error });
      });
  } catch (error) {
    console.error("Error in POST function:", error);
    return new NextResponse(500).json({ error: "An error occurred." });
  }
  return Response.json(data);
}
