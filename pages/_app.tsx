import "../styles/globals.css";
import "../styles/calendar.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		if (!GA_TRACKING_ID) return;

		const handleRouteChange = (url: string) => pageview(url);
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	return (
		<>
			<Head>
				<link rel="favicon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
