import { NextResponse } from "next/server";

export async function GET() {
  const date = Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    second: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "long",
    year: "2-digit",
  }).format(new Date());
  return NextResponse.json({ date });
}
