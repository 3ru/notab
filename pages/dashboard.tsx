import { Layout } from "../components/templates/Layout";
import { DashboardRow } from "../components/atoms/dashboard/DashboardRow";
import { GetStaticProps } from "next";
import { ListContentsResponse } from "../types/api/listContent";
import { DashboardEvent } from "../types/api/dashboard";
import { useMicrocmsClient } from "../lib/useMicrocmsClient";

type Props = {
	dashboards: Array<DashboardEvent>;
};

export default function Dashboard({ dashboards }: Props) {
	return (
		<Layout title="dashboard">
			<div className="container flex mx-auto w-full items-center justify-center">
				<ul className="flex flex-col m-4 w-screen">
					{dashboards.map((event: DashboardEvent) => (
						<DashboardRow
							key={event.id}
							path="/events"
							emoji={event.emoji}
							title={event.title}
							desc={event.summary}
							date={new Date(dashboards[0].date).toLocaleDateString()}
						/>
					))}
				</ul>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<DashboardEvent> = await useMicrocmsClient.get({
		endpoint: "dashboard",
		queries: { limit: 99 },
	});

	const dashboards = res.contents;
	return { props: { dashboards }, revalidate: 1000 };
};
