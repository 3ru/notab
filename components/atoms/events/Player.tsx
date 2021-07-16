import { memo } from "react";
import { usePlayer } from "../../../lib/usePlayer";

export const Player = memo(
	({ id, name }: { id: string | undefined; name: string }) => {
		const { state, error } = usePlayer(id!);

		if (id && !error) {
			return (
				<div className="col-span-1 divide-y divide-gray-200 justify-center text-center">
					<iframe
						width="560"
						height="315"
						id={id}
						// TODO 予約配信へのスマートな対応
						// className={state === "unstarted" ? "" : "rounded-lg "}
						className={"w-full flex items-center justify-between"}
						frameBorder={0}
						src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
					/>

					<p className="">{name}</p>
				</div>
			);
		} else {
			return <></>;
		}
	}
);
