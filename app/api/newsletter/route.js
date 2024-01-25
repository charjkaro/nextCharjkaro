import { NextResponse } from "next/server";
import cookie from "cookie";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { data } from "autoprefixer";

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" });
}

export async function POST(req, res) {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    const { email } = data;

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
