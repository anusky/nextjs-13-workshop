"use client";

import { useState } from "react";

const ContactPage = () => {
  const [contact, setContact] = useState({});
  const handleGetContactInfo = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/api/contact")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setContact(res);
      });
  };
  return (
    <div>
      <h1>Contact page</h1>
      <div>
        <pre>{JSON.stringify(contact, null, 2)}</pre>
        <button onClick={handleGetContactInfo}>Load contact info</button>
      </div>
    </div>
  );
};

export default ContactPage;
