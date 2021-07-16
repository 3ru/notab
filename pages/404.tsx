/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { MainLogo } from "../components/img/svgs/MainLogo";
import { PageNotFound } from "../components/img/svgs/PageNotFound";

export default function FourOhFour() {
	return (
		<>
			<div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
				<div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left ">
					<div className="w-full md:w-1/2 ">
						<Link href="/" passHref>
							<div className="mb-10 lg:mb-20 flex items-center cursor-pointer hover:opacity-70 duration-300 ease-in-out">
								<p className="italic font-extrabold font-mono text-6xl bg-clip-text text-transparent bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
									NOTAB
								</p>
								<MainLogo className="block h-14 w-auto ml-2" />
							</div>
						</Link>
						<div className="mb-10 md:mb-20 text-gray-600 font-light">
							<h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">
								You seem to be lost!
							</h1>
							<p>The page you're looking for isn't available.</p>
							<p>Try searching again or use the Go Back button below.</p>
						</div>
						<div className="md:mb-0">
							<Link href="/" passHref>
								<button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600 animate- animate-bounce">
									<i className="mdi mdi-arrow-left mr-2"></i>Go Back
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<PageNotFound className="m-auto p-2 sm:p-12 sm:w-full w-64" />
					</div>
				</div>
				<div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
				<div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
			</div>
		</>
	);
}
