/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { UserAddIcon } from "@heroicons/react/outline";
import { useEffect, VFC, memo, Dispatch, SetStateAction } from "react";
import { usePlayer } from "../../../lib/usePlayer";

type Props = {
	id?: string;
	name: string;
	cnt: number;
	setCnt: Dispatch<SetStateAction<number>>;
	isLast: boolean;
	liveList: Array<{ name: string; status: boolean }>;
	setLiveList: Dispatch<SetStateAction<any>>;
	idx: number;
};

export const Player: VFC<Props> = memo((props) => {
	const { id, name, cnt, setCnt, isLast, liveList, setLiveList, idx } = props;
	if (!id) return <></>;

	const { state, error } = usePlayer(id!);

	useEffect(() => {
		state === "playing" &&
			setLiveList(
				liveList.map((userStatus) =>
					userStatus.name === name
						? { ...userStatus, status: true }
						: userStatus
				)
			);
		state === "playing" && setCnt(cnt + 1);
	}, [state]);

	if (id && !error) {
		return (
			<div
				className={
					isLast
						? "col-span-2 row-span-2 md:col-start-2 divide-y divide-gray-200 justify-center text-center"
						: cnt === 1
						? "col-span-4 row-span-4 divide-y divide-gray-200 justify-center text-center"
						: "col-span-2 row-span-2 divide-y divide-gray-200 justify-center text-center"
				}
			>
				<iframe
					id={id}
					// TODO 予約配信へのスマートな対応
					// className={state === "unstarted" ? "" : "rounded-lg "}
					className={
						cnt === 1
							? "w-full h-[90vh] flex items-center justify-between"
							: "w-full h-[50vh] flex items-center justify-between"
					}
					frameBorder={0}
					src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
				/>
			</div>
		);
	} else {
		return <></>;
	}
});
