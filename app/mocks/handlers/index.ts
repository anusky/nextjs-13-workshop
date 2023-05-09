import { coinHandlers } from "./api/coins";
import { contactHandlers } from "./api/contact";

export const handlers = [...contactHandlers, ...coinHandlers];
