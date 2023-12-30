import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export  async function POST(request: Request) {
  try {
    const { email, password,username } = await request.json();

    const hashedPassword= await hash(password,10);

    const response =await sql`
    INSERT INTO users(username,email,password)
    VALUES (${username}, ${email}, ${hashedPassword})
    `
  } catch (error) {
    console.log({ error });
  }
  return NextResponse.json({message:'Success'})
}
