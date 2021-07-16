import { Layout } from "../components/templates/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMicrocmsClient } from "../lib/useMicrocmsClient";
import { GetStaticProps } from "next";
import { CalendarEvent } from "../types/api/calendar";
import { ListContentsResponse } from "../types/api/listContent";
import { useRouter } from "next/router";

type Props = {
	events: Array<CalendarEvent>;
};

export default function Schedule({ events }: Props) {
	const router = useRouter();
	const localizer = momentLocalizer(moment);

	events.map((e: CalendarEvent) => {
		e.start = new Date(e.start);
		e.end = new Date(e.end);
	});

	return (
		<Layout title="calendar">
			<Calendar
				step={60}
				events={events}
				localizer={localizer}
				showMultiDayTimes
				onSelectEvent={(event: CalendarEvent, e) => {
					// router.push(event.path);
					router.push("/ev");
				}}
				style={{ height: "80vh", width: "95vw" }}
				className="neumo p-3 sm:p-8 rounded-2xl max-w-screen-2xl text-xs sm:text-sm mt-4"
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<CalendarEvent> = await useMicrocmsClient.get({
		endpoint: "calendar",
		queries: { limit: 99 },
	});

	const events = res.contents;
	return { props: { events }, revalidate: 1000 };
};
