import React, { memo, VFC, ReactNode } from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import Head from "next/head";

type Props = {
	children: ReactNode;
	title: string;
};

export const Layout: VFC<Props> = (props) => {
	const { children, title } = props;
	return (
		<div lang="ja-JP" className="font-mono min-h-screen flex flex-col">
			<Head>
				<title>{title} | mulvid</title>
			</Head>
			<Header />
			{/* <main className="flex-1"> */}
			<main className="flex-1 flex justify-center items-center ">
				{children}
			</main>
			<Footer />
		</div>
	);
};
