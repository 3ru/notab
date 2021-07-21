/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, VFC, memo, Dispatch, SetStateAction } from "react";
import { usePlayer } from "../../../lib/usePlayer";

type Props = {
	id?: string;
	name: string;
	team: string;
	cnt: number;
	setCnt: Dispatch<SetStateAction<number>>;
	liveList: Array<{ name: string; status: boolean }>;
	setLiveList: Dispatch<SetStateAction<any>>;
	teamLiveList: Array<{ name: string; status: boolean }>;
	setTeamLiveList: Dispatch<SetStateAction<any>>;
};

export const Player: VFC<Props> = memo((props) => {
	const {
		id,
		name,
		team,
		cnt,
		setCnt,
		liveList,
		setLiveList,
		teamLiveList,
		setTeamLiveList,
	} = props;
	if (!id) return <></>;

	const { state, error } = usePlayer(id!);

	useEffect(() => {
		if (state === "playing") {
			// TODO merge these to single
			setLiveList(
				liveList.map((userStatus) =>
					userStatus.name === name
						? { ...userStatus, status: true }
						: userStatus
				)
			);

			setTeamLiveList(
				teamLiveList.map((teamStatus) =>
					teamStatus.name === team
						? { ...teamStatus, status: true }
						: teamStatus
				)
			);
		}
	}, [state]);

	useEffect(() => {
		const liveCnt = liveList.filter((e) => e.status === true);
		state === "playing" && setCnt(liveCnt.length);
	}, [liveList]);


	if (id && !error) {
		return (
			<div
				className={[
					"justify-center",
					cnt === 1 ? "col-span-4 row-span-4" : "col-span-2 row-span-2",
					// cnt === 3 && "md:col-start-2",
				].join(" ")}
			>
				<iframe
					id={id}
					loading="lazy"
					className={[
						"w-full flex items-center justify-between",
						cnt === 1 ? "h-[90vh]" : "h-[50vh]",
						state === "unstarted" ? "hidden" : "",
					].join(" ")}
					frameBorder={0}
					src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
				/>
			</div>
		);
	} else {
		return <></>;
	}
});
