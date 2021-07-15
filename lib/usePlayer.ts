import { useEffect, useState } from "react";

declare global {
	interface Window {
		YT?: any;
	}
}

type ytIframeEvent = {
	data: number;
	target: object;
};

export function usePlayer(id: string) {
	const [state, setState] = useState("loading");
	const [error, setError] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!window.YT) return;
			clearInterval(intervalId);
			const player = new window.YT.Player(id, {
				events: {
					onReady() {
						setState("ready");
						player.playVideo();
					},
					onError() {
						setError(true);
					},
					onStateChange(event: ytIframeEvent) {
						[
							() => setState("unstarted"),
							() => setState("ended"),
							() => setState("playing"),
							() => setState("paused"),
							() => setState("buffering"),
							() => {},
							() => setState("videocued"),
						][event.data + 1]();
					},
				},
			});
		}, 1000);
	}, [id]);
	return { state, error };
}
