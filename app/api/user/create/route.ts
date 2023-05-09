import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * @description Create a user
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const user = await request.json();

  const createdUser = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
    },
  });

  return NextResponse.json({ createdUser });
}
