import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * @TODO: check why is saving all app status in store
 */

/**
 * @description revalidate here some fetches with tags
 * @example http://localhost:3000/api/revalidate?tag=date
 * @example http://localhost:3000/api/revalidate?path=http://localhost:3000/api/latest-updated-date/3/
 */
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") as string;
  const path = request.nextUrl.searchParams.get("path") as string;

  if (!tag && !path) {
    return NextResponse.json({ error: "tag or path is required" });
  }

  if (tag && !path) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  }

  if (!tag && path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }
}
