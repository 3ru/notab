import { memo } from "react";
import { usePlayer } from "../../../lib/usePlayer";

export const Player = memo(
	({ id, name }: { id: string | undefined; name: string }) => {
		const { state, error } = usePlayer(id!);

		if (!error) {
			return (
				<div className="duration-1000 ease-in-out hover:scale-105 delay-300   col-span-1 divide-y divide-gray-200">
					{/* <p className="text-center font-bold uppercase">{state}</p> */}
					<iframe
						// width="560"
						height="315"
						id={id}
						// TODO 予約配信へのスマートな対応
						// className={state === "unstarted" ? "" : "rounded-lg "}
						className="w-full  flex items-center justify-between p-6 space-x-6"
						frameBorder={0}
						src={`https://www.youtube.com/embed/live_stream?channel=${id}&enablejsapi=1&mute=1`}
					/>

					<p className={state === "unstarted" ? "" : "text-center"}>{name}</p>
				</div>
			);
		} else {
			return <></>;
		}
		
	}
);
