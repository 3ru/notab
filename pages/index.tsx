import Image from "next/image";
import { Layout } from "../components/templates/Layout";
import lpImg from "../components/img/E8pRGD7h-5w.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<Layout title="Home">
			{/* <div className="text-4xl text-center">🚚</div>... */}

			<div className="relative ">
				<main className="lg:relative">
					<div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left w-full xl:w-[1400px] lg:w-[1000px]">
						<div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 ">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
								<span className="block xl:inline ">全てを見よう、</span>
								<p className="p-4"></p>
								<span className="block bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-600 xl:inline">
									一度に見よう
								</span>
							</h1>
							<p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
								これまでの複数タブはもうひつようありません
								<br />
								これからはこれ一つで完結
								<br />
								新しい生活をはじめましょう
							</p>
							<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link href="/">
										<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
											公開中を見る
										</a>
									</Link>
								</div>
								<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
									<Link href="/dashbord">
										<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
											Go Dashbord
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute inset-y-0 xl:-inset-y-28 lg:right-0 lg:w-1/2 lg:h-full">
						<Image
							className="absolute inset-0 w-full h-full object-cover hover:scale-150 duration-1000 delay-500"
							src={lpImg}
							alt="iphone landscape photography"
							placeholder="blur"
						/>
					</div>
				</main>
			</div>
		</Layout>
	);
}
