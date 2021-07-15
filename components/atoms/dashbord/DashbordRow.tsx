import { VFC } from "react";
import Link from "next/link";
import { memo } from "react";

type Props = {
	path: string;
	emoji: string;
	title: string;
	desc?: string;
	date?: string;
};

export const DashbordRow: VFC<Props> = memo((props) => {
	const { path, emoji, title, desc, date } = props;
	return (
		<Link href={path} passHref>
			<li className="border-gray-400 flex flex-row mb-6 container mx-auto px-8">
				<div
					className="select-none cursor-pointer rounded-2xl flex flex-1 items-center p-4 transition duration-200 ease-in-out
                                         transform hover:opacity-80 active:translate-y-1 active:shadow-inner neumo"
				>
					<div className="flex flex-col rounded-3xl w-10 h-10 bg-gray-300 justify-center items-center mr-4 neumoin">
						<span className="hover:animate-spin">{emoji}</span>
					</div>
					<div className="flex-1 pl-1 mr-4">
						<div className="text-xs sm:text-base font-medium  max-h-14 overflow-y-scroll md:overflow-visible">
							{title}
						</div>
						<div className="text-gray-600 text-sm hidden sm:block">{desc}</div>
					</div>
					<div className="text-gray-600 text-xs">{date}</div>
				</div>
			</li>
		</Link>
	);
});
