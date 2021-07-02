import { Layout } from "../components/templates/Layout";

export default function Dashbord() {
	const Row = (props: any) => {
		const { title } = props;
		return (
			<li className="border-gray-400 flex flex-row mb-6 container mx-auto px-8">
				<div
					className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out
                                         transform hover:-translate-y-1 hover:shadow-lg "
				>
					<div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
						💧
					</div>
					<div className="flex-1 pl-1 mr-16">
						<div className="font-medium">{title}</div>
						<div className="text-gray-600 text-sm">200ml</div>
					</div>
					<div className="text-gray-600 text-xs">6:00 AM</div>
				</div>
			</li>
		);
	};
	return (
		<Layout title="dashbord">
			<div className="container flex mx-auto w-full items-center justify-center">
				<ul className="flex flex-col m-4 w-screen">
					<Row title="Cup of water" />
					<Row title="Random #Apex Legends community cup" />
					<Row title="Random #Apex Legends community cup" />
				</ul>
			</div>
		</Layout>
	);
}
