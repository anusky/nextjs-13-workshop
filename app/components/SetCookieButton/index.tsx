"use client";

import { useRouter } from "next/navigation";

interface SetCookieButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  reset?: boolean;
}
const SetCookieButton = ({
  reset = false,
  children = "Set Cookie",
}: SetCookieButtonProps) => {
  const router = useRouter();
  const handleOnSetupCookie = () => {
    if (reset) {
      const resetCookie = `test=true;path=/;max-age=0;`;
      document.cookie = resetCookie;
    } else {
      const cookie = `test=true;path=/;max-age=${60 * 60 * 24 * 30};`;
      document.cookie = cookie;
    }
    router.refresh();
  };
  return (
    <button
      className="border-2 border-purple-500 rounded-md px-2 py-1"
      onClick={handleOnSetupCookie}
    >
      {children}
    </button>
  );
};

export default SetCookieButton;
