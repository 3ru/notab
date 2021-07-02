import { GitHubLogo } from "../../img/svgs/GithubLogo";

const navigation = [
	{
		name: "GitHub",
		href: "https://github.com/Ryuyxx/mulvid",
		icon: (props: any) => <GitHubLogo {...props} />,
	},
];

export const Footer = () => {
	return (
		<footer className="bg-white">
			<h2 className="sr-only">Footer</h2>
			<div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
				<nav
					className="-mx-5 -my-2 flex flex-wrap justify-center"
					aria-label="Footer"
				>
					{navigation.map((item) => (
						<div key={item.name} className="px-5 py-2">
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon className="h-6 w-6" aria-hidden="true" />
							</a>
						</div>
					))}
				</nav>
			</div>
		</footer>
	);
};
