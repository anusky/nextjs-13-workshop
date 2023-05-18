export const sendAnalyticsEvent = (...data: unknown[]) => {
  console.log(`Analytics Event Sent with ${data.join(",")}`);
};
