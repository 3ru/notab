import { memo, VFC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavProps = {
	name: string;
	hamburger?: boolean;
};

export const NavContent: VFC<NavProps> = memo((navprops) => {
	const { name, hamburger } = navprops;
	const href = name.toLowerCase();
	const router = useRouter();
	return (
		<Link href={href}>
			<a
				className={
					router.pathname === href
						? hamburger
							? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						: hamburger
						? "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
						: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				}
			>
				{name}
			</a>
		</Link>
	);
});
