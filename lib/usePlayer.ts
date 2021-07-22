import { useEffect, useState } from "react";

declare global {
	interface Window {
		YT?: any;
	}
}

type ytIframeEvent = {
	data: number;
	target: {
		getVideoData(): string;
		getVideoUrl(): string;
	};
};

export function usePlayer(id: string) {
	const [state, setState] = useState("loading");
	const [error, setError] = useState(false);
	const [info, setInfo] = useState({});

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!window.YT) return;
			clearInterval(intervalId);
			const player = new window.YT.Player(id, {
				events: {
					onReady(event: ytIframeEvent) {
						setInfo(event.target.getVideoData());
						setState("ready");
						event.target.getVideoUrl().includes("live_stream")
							? player.stopVideo() && setError(true)
							: player.playVideo();
					},
					onError() {
						setError(true);
						player.stopVideo();
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
	return { info, state, error };
}
