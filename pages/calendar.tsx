import { Layout } from "../components/templates/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { microcmsClient } from "../lib/microcmsClient";
import { GetStaticProps } from "next";
import { ListContentsResponse, CalendarEvent } from "../types/api/calendar";

// TODO propsの型定義
export default function Schedule({ events }) {
	const localizer = momentLocalizer(moment);

	return (
		<Layout title="calendar">
			<Calendar
				step={60}
				events={events}
				localizer={localizer}
				showMultiDayTimes
				onSelectEvent={(event, e) => {
					//TODO link to dashbord
					console.log(event.path);
				}}
				style={{ height: "80vh", width: "90vw" }}
				className="neumo p-8 rounded-2xl max-w-screen-2xl"
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<CalendarEvent> = await microcmsClient.get({
		endpoint: "calendar",
		queries: { limit: 99 },
	});

	const events = res.contents;
	return { props: { events }, revalidate: 60 };
};
