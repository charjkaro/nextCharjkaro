import { NextResponse } from "next/server";
import { get, set } from "lodash";

import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { data } from "autoprefixer";

const rateLimit = 3; // Number of allowed requests per minute
const rateLimiter = {};

export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
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
export async function POST(req, res) {
  const ip = req.headers["x-forwarded-for"];

  if (!rateLimiterMiddleware(ip)) {
    console.log("too many requests", " Error 429");
    // return new NextResponse(429).json({ error: "Too many requests" });
    return Response.json({ error: "too many requests" }, { status: 429 });
  }
  try {
    const data = await req.json();
    console.log("Received data:", data);
    let name = data.name;
    let email = data.email;
    let phone = data.phone;
    let company = data.company;
    let message = data.message;
    console.log("Processed data:", name, email, phone, company, message);
    const todoRef = collection(db, "contactform");
    console.log("Adding document...");
    await addDoc(todoRef, {
      name,
      email,
      phone,
      company,
      message,
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
