import { Layout } from "../components/templates/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMicrocmsClient } from "../lib/useMicrocmsClient";
import { GetStaticProps } from "next";
import { CalendarEvent } from "../types/api/calendar";
import { ListContentsResponse } from "../types/api/listContent";
import { Modal } from "../components/atoms/modal";
import { useState } from "react";

type Props = {
	events: Array<CalendarEvent>;
};

const tmpEvents = [
	{
		name: "NOTAB",
		ref: "/events",
	},
	{
		name: "本配信",
		ref: "https://www.mildom.com/crcup0723/?utm_source=twitter&utm_medium=social&utm_campaign=crcup&utm_content=apex",
	},
];

export default function Schedule({ events }: Props) {
	const localizer = momentLocalizer(moment);
	const [open, setOpen] = useState(false);

	events.map((e: CalendarEvent) => {
		e.start = new Date(e.start);
		e.end = new Date(e.end);
	});

	return (
		<Layout title="calendar">
			<Modal
				open={open}
				setOpen={setOpen}
				title={events[1].title}
				content="
						実況: 平岩康佑 解説: Alelu <br/>
						ワールズエッジ: 3試合 オリンパス: 2試合  <br/>
						商品: トロフィー、高級腕時計"
				btns={tmpEvents}
			/>
			<Calendar
				step={60}
				events={events}
				localizer={localizer}
				showMultiDayTimes
				onSelectEvent={(event: CalendarEvent, e) => {
					setOpen(true);
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
