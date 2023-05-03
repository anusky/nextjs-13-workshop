import SetCookieButton from "@/components/SetCookieButton";
import { cookies } from "next/headers";

const GetCookiePage = () => {
  const cookieStore = cookies();
  const testCookie = cookieStore.get("test");

  return (
    <div>
      <p>{`GetCookiePage - ${testCookie ? "cookie value" : "No Cookie"}`}</p>
      <pre>{JSON.stringify(testCookie, null, 4)}</pre>
      <SetCookieButton reset={true}> Reset Cookies</SetCookieButton>
    </div>
  );
};

export default GetCookiePage;
