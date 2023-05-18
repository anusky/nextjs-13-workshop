import Image from "next/image";
import { roboto_mono } from "../fonts";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../Lobster-Regular.ttf",
  display: "swap",
});

const OptimixingPage = () => {
  return (
    <div className="grid gap-4">
      <h1>OptimixingPage</h1>
      <div className="">
        <Image
          src="https://picsum.photos/500/500"
          alt="Picture of the author"
          width={500}
          height={500}
          priority
        />
      </div>
      <h2 className={roboto_mono.className}>Roboto mono example</h2>
      <h2 className="h2-with-inter">inter by common classame example</h2>
      <h2 className={myFont.className}>Lobster font from local example</h2>
      <h2 className="font-arquitect">
        Arquitects Daughter font from tailwind css
      </h2>
    </div>
  );
};

export default OptimixingPage;
