"use client";

import { useEffect, useRef, useState } from "react";
import { TestClass } from "./user";

const UserPage = () => {
  const classRef = useRef<TestClass>();
  const [count, setCount] = useState(-1);

  const handleOnClickGetName = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (!classRef.current) {
      classRef.current = new TestClass();
    }
  }, []);

  useEffect(() => {
    if (count > -1) {
      TestClass.deprecatedMethodStatic();

      if (classRef.current) {
        classRef.current.deprecatedMethod();
      }
    }
  }, [count]);

  return (
    <div className="font-inter">
      <button onClick={handleOnClickGetName}>Update</button>
    </div>
  );
};

export default UserPage;
