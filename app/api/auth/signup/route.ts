import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export  async function POST(request: Request) {
  try {
    const { email, password,username } = await request.json();
    const existingUser = await sql
        `SELECT * FROM users WHERE email =${email}`
      
      if (existingUser?.rows?.length > 0) {
        throw new Error('Email is already in use'); 
      }
    const hashedPassword= await hash(password,10);
    const response =await sql`
    INSERT INTO users(username,email,password)
    VALUES (${username}, ${email}, ${hashedPassword})
    `

  } catch (error) {
    console.log({ error });
    return Promise.reject(new Error('Email is already in use'));

  }
  return NextResponse.json({message:'Success'})
}
