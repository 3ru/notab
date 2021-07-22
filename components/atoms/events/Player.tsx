/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, VFC, memo, Dispatch, SetStateAction } from "react";
import { classNames } from "../../../lib/tailwindClassNames";
import { usePlayer } from "../../../lib/usePlayer";
import { LiveStatuses } from "../../../types/events/player";

type Props = {
	id?: string;
	name: string;
	team: string;
	liveStatuses: LiveStatuses;
	setLiveStatuses: Dispatch<SetStateAction<LiveStatuses>>;
};

export const Player: VFC<Props> = memo((props) => {
	const { id, name, team, liveStatuses, setLiveStatuses } = props;
	if (!id) return <></>;

	const { info, state, error } = usePlayer(id!);

	useEffect(() => {
		state === "playing" &&
			setLiveStatuses({
				...liveStatuses,
				[team]: {
					status: true,
					members: {
						...liveStatuses[team].members,
						[name]: true,
					},
				},
			});
	}, [state]);

	const cnt: number =
		liveStatuses[team] === undefined
			? 0
			: Object.values(liveStatuses[team].members).reduce(
					(sum: number, element: any): number => {
						return sum + element;
					},
					0
			  );

	if (id && !error) {
		return (
			<div
				className={classNames(
					"justify-center z-10",
					cnt === 1 ? "col-span-4 row-span-4" : "col-span-2 row-span-2",
					cnt > 1 &&
						cnt % 2 === 1 &&
						Object.keys(liveStatuses[team].members).slice(-1)[0] === name
						? "md:col-start-2"
						: ""
				)}
			>
				<iframe
					id={id}
					className={classNames(
						"w-full flex items-center justify-between",
						cnt === 1 ? "h-[90vh]" : "h-[50vh]",
						state === "unstarted" ? "hidden" : ""
					)}
					frameBorder={0}
					src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
				/>
			</div>
		);
	} else {
		return <></>;
	}
});
