"use client";

export default function InitMSWClient() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
    import("../mocks").then(({ setupMocks }) => {
      setupMocks();
    });
  }

  return null;
}
