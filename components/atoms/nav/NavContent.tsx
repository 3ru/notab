import { memo, VFC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavProps = {
	name: string;
	hamburger?: boolean;
};

export const NavContent: VFC<NavProps> = memo((navprops) => {
	const { name, hamburger } = navprops;
	const href = "/" + name.toLowerCase();
	const router = useRouter();
	return (
		<Link href={href}>
			<a
				className={
					router.pathname === href
						? hamburger
							? "hamburger-current"
							: "header-current"
						: hamburger
						? "hamburger"
						: "header"
				}
			>
				{name}
			</a>
		</Link>
	);
});
