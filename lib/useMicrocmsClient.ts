import { createClient } from "microcms-js-sdk";

export const useMicrocmsClient = createClient({
	serviceDomain: "notab",
	apiKey: `${process.env.NEXT_PUBLIC_X_API_KEY}`,
});
