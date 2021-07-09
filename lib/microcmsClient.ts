import { createClient } from "microcms-js-sdk";

export const microcmsClient = createClient({
	serviceDomain: "notab",
	apiKey: `${process.env.NEXT_PUBLIC_X_API_KEY}`,
});
