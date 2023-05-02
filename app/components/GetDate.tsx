"use client";
import { cache, useState } from "react";

const getDate = cache(async (id: string) => {
  console.log("id", id);
  const data = await fetch("/api/get-date", {
    method: "GET",
    next: { revalidate: 5 }, // Revalidate every 5 seconds
  }).then((res) => res.json());
  return data.date;
});

const GetDate = () => {
  const [currentDate, setCurrentDate] = useState("no date");
  const handleOnClick = async () => {
    const date = await getDate("today");

    console.log("date", date);
    setCurrentDate(date);
  };
  // let dateComp = null;
  // const date = use(getDate("today"));
  // if (date) {
  //   dateComp = <h1>{date}</h1>;
  // }
  return (
    <div className="bg-cyan-400 w-fit rounded-md px-4 py-8">
      {/* {dateComp} */}
      <h1>{currentDate}</h1>
      <button onClick={handleOnClick}>Get current Date</button>
      {/* <MemberList /> */}
    </div>
  );
};

export default GetDate;
