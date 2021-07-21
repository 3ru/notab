import "../styles/globals.css";
import "../styles/calendar.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import usePageView from "../lib/usePageView";


function MyApp({ Component, pageProps }: AppProps) {
	usePageView()

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
