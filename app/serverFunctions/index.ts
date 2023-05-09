"use server";
import { cookies } from "next/dist/client/components/headers";

export async function handleSetupCookies() {
  const cookie = cookies().get("caracola");
  if (cookie) {
    return {
      name: cookie.name,
      value: cookie.value,
    };
  } else {
    return { error: true };
  }
}
