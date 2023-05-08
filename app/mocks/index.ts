const IS_BROWSER = typeof window !== "undefined";

export const setupMocks = async () => {
  console.log("IS_BROWSER", IS_BROWSER);
  if (IS_BROWSER) {
    const { mswWorker } = await import("./mswWorker");
    mswWorker.start();
  } else {
    const { mswServer } = await import("./mswServer");
    mswServer.listen();
  }
};
