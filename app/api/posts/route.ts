/**
 * The following HTTP methods are supported:
 * GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.
 * If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
 */
import { NextResponse } from "next/server";

/**
 * @description Get a post
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return NextResponse.json({ post });
}

/**
 * @description Edit a post
 * @param request
 * @returns
 */
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const editedPost = await request.json();

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(editedPost),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return NextResponse.json({ post });
}

/**
 * @description Create a post
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const newPost = await request.json();

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return NextResponse.json({ post });
}

/**
 * @description Delete a post
 * @param request
 * @returns
 */
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  return NextResponse.json({ id });
}
