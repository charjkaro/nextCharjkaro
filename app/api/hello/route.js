import { NextResponse } from "next/server";

import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { data } from "autoprefixer";

export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
export async function POST(req, res) {
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
