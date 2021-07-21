import { createClient } from "microcms-js-sdk";

export const useMicrocmsClient = createClient({
	serviceDomain: "notab",
	apiKey: `${process.env.X_API_KEY}`,
});
