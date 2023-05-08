export default function InitMSWServer() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
    import("../mocks").then(({ setupMocks }) => {
      setupMocks();
    });
  }

  return null;
}
