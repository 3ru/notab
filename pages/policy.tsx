import { Layout } from "../components/templates/Layout";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
	BookmarkAltIcon,
	BookOpenIcon,
	RssIcon,
	ViewListIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const links = [
	{
		title: "個人情報保護方針",
		description:
			"当サイトでは、個人情報を一切収集しておりません。なお、個人情報を取り扱う際には個人情報保護に関する法令・国が定める指針・その他の規範を遵守し、次の事項を含む個人情報保護方針を定め、これを実施し、かつ、維持することに努めてまいります。",
		icon: BookOpenIcon,
	},
	{
		title: "クッキー（Cookie）の使用について",
		description:
			"当サイトではアクセス状況を分析し、当サービスを改善するためため、クッキーを使用しています。\
            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。\
            また、ブラウザの設定によりクッキーの受け取りを拒否することができますが、当サイトが提供するサービスを一部利用できなくなる場合があります。",
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

export default function Policy() {
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
								{links.map((link, linkIdx) => (
									<li
										key={linkIdx}
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
											<p className="text-sm text-gray-500">
												{link.description}
											</p>
										</div>
									</li>
								))}
							</ul>
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
