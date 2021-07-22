import { Layout } from "../components/templates/Layout";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
	BookmarkAltIcon,
	BookOpenIcon,
	RssIcon,
	ViewListIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
	{
		title: "個人情報保護方針",
		description:
			"当サイトでは、個人情報を収集しておりません。なお、個人情報を取り扱う際には個人情報保護に関する法令・国が定める指針・その他の規範を遵守し、次の事項を含む個人情報保護方針を定め、これを実施し、かつ、維持することに努めてまいります。",
		icon: BookOpenIcon,
	},
	{
		title: "クッキー（Cookie）の使用について",
		description:
			"当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。\
			このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。\
			この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。\
			この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。\
			また、Youtubeの埋め込み動画の利用もしております。これらの利用も同時に規約に遵守するもとし、詳細は以下よりご確認ください。",
		icon: ViewListIcon,
	},
	{
		title: "免責事項",
		description:
			"当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。\
            また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。\
            情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。",
		icon: BookmarkAltIcon,
	},
	{
		title: "著作権について",
		description:
			"当サイトのコンテンツ（写真や画像、文章など）の著作権につきましては、 原則として当社に帰属しており、無断転載することを禁止します。当サイトのコンテンツを利用したい場合は、別途お問い合わせください。",
		icon: RssIcon,
	},
];

const terms = [
	{
		title: "Googleアナリティクスサービス利用規約",
		ref: "https://marketingplatform.google.com/about/analytics/terms/jp/",
	},
	{
		title: "Googleポリシーと規約",
		ref: "https://policies.google.com/technologies/ads?hl=ja",
	},
	{
		title: "YouTube の利用規約",
		ref: "https://www.youtube.com/t/terms",
	},
];

export default function Policy() {
	const router = useRouter();
	return (
		<Layout title="プライバシーポリシー">
			<div className="font-sans">
				<main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-xl mx-auto">
						<div className="">
							<h1 className="text-2xl font-semibold text-gray-500 tracking-wide uppercase mt-8">
								プライバシーポリシー
							</h1>
							<ul
								role="list"
								className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
							>
								{links.map((link, index) => (
									<li
										key={index}
										className="relative py-5 flex items-start space-x-4"
									>
										<div className="flex-shrink-0">
											<span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
												<link.icon
													className="h-6 w-6 text-indigo-700"
													aria-hidden="true"
												/>
											</span>
										</div>
										<div className="min-w-0 flex-1">
											<h3 className="text-base font-medium text-gray-900 pb-2">
												<span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
													<span
														className="absolute inset-0"
														aria-hidden="true"
													/>
													{link.title}
												</span>
											</h3>
											<div className="text-sm text-gray-500">
												{link.description}
											</div>
										</div>
									</li>
								))}
							</ul>
							<div>
								{terms.map((term, index) => (
									<p
										key={index}
										className="text-xs font-medium text-indigo-800 hover:opacity-50"
									>
										<a
											href={term.ref}
											target="_blank"
											className="cursor-pointer"
											rel="noreferrer noopener"
										>
											{term.title}
										</a>
									</p>
								))}
							</div>
							<div className="mt-6 animate-pulse">
								<Link href="/" passHref>
									<span className="text-base font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
										ホームへ戻る<span aria-hidden="true"> &rarr;</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
