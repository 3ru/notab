import { Layout } from "../components/templates/Layout";
import { DashbordRow } from "../components/atoms/dashbord/DashbordRow";
import { GetStaticProps } from "next";
import { ListContentsResponse } from "../types/api/listContent";
import { DashbordEvent } from "../types/api/dashbord";
import { useMicrocmsClient } from "../lib/useMicrocmsClient";

type Props = {
	dashbords: Array<DashbordEvent>;
};

export default function Dashbord({ dashbords }: Props) {
	return (
		<Layout title="dashbord">
			<div className="container flex mx-auto w-full items-center justify-center">
				<ul className="flex flex-col m-4 w-screen">
					{dashbords.map((event: DashbordEvent, index) => (
						<DashbordRow
							key={event.id}
							path="/events"
							emoji={event.emoji}
							title={event.title}
							desc={event.summary}
							date={new Date(dashbords[0].date).toLocaleDateString()}
						/>
					))}
				</ul>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<DashbordEvent> = await useMicrocmsClient.get({
		endpoint: "dashbord",
		queries: { limit: 99 },
	});

	const dashbords = res.contents;
	return { props: { dashbords }, revalidate: 1000 };
};
