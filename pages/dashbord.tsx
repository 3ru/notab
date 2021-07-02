import { Layout } from "../components/templates/Layout";
import { DashbordRow } from "../components/atoms/dashbord/DashbordRow";

export default function Dashbord() {
	return (
		<Layout title="dashbord">
			<div className="container flex mx-auto w-full items-center justify-center ">
				<ul className="flex flex-col m-4 w-screen">
					<DashbordRow
						emoji="💧"
						title="VALORANT Champions Tour 2021 Japan"
						desc="世界大会へ向けた日本代表選考"
						date="2021/07/30"
					/>
					<DashbordRow emoji="🦞" title="LCK Summer 2021 #League of Legends" />
					<DashbordRow emoji="🥂" title="GLL Masters Spring #Apex Legends" />
				</ul>
			</div>
		</Layout>
	);
}
