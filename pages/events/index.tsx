/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from "next";
import { Layout } from "../../components/templates/Layout";
import { useMicrocmsClient } from "../../lib/useMicrocmsClient";
import { ListContentsResponse } from "../../types/api/listContent";
import { User } from "../../types/api/user";
import { useState, useEffect } from "react";
import { SelectMenu } from "../../components/molecules/SelectMenu";
import { Player } from "../../components/atoms/events/Player";
import Head from "next/head";
import { Notification } from "../../components/atoms/nav/Notifications";
import { LiveStatuses, MemberStatus } from "../../types/events/player";

type Props = {
	users: Array<User>;
};

export default function Events({ users }: Props) {
	const teams = users
		.map((user: User) => user.team.toString())
		.filter(
			(value: string, index: number, self: Array<string>) =>
				self.indexOf(value) === index
		);
	teams.unshift("全チーム表示 (αテスト/バグ有)");

	const [select, setSelect] = useState(teams.slice(-1)[0]);

	let [liveStatuses, setLiveStatuses] = useState<LiveStatuses>({});

	useEffect(() => {
		teams.map((team) => {
			const member: MemberStatus = {};

			users
				.filter(
					(value: User, index: number, self: Array<User>) =>
						value.team.toString() === team
				)
				.map((e) => (member[e.username] = false));

			liveStatuses[team] = {
				status: false,
				members: member,
			};
		});
	}, []);

	return (
		<>
			<Head>
				<script async src="https://www.youtube.com/iframe_api"></script>
			</Head>
			<Layout title="CRカップ">
				<Notification
					showingTime={3}
					title="お知らせ"
					content="Youtubeアカウントを所持しているユーザーのみ表示されます。"
				/>
				<div className="w-full h-full p-2">
					<div className="max-w-4xl m-auto w-full px-8 mb-8">
						<SelectMenu
							label="チーム選択"
							teams={teams}
							select={select}
							setSelect={setSelect}
							liveStatuses={liveStatuses}
						/>
					</div>

					{/* <p className="text-center font-bold"></p> */}

					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-4 h-screen">
						{users.map((user: User, index) =>
							// needed for avoid iframe bug
							{
								if (
									select.substr(0, 4) === "全チーム" ||
									user.team.toString() === select
								) {
									return (
										<Player
											key={user.id}
											id={user?.youtubeID}
											name={user.username}
											team={select}
											liveStatuses={liveStatuses}
											setLiveStatuses={setLiveStatuses}
										/>
									);
								}
							}
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<User> = await useMicrocmsClient.get({
		endpoint: "crcup_apex6",
		queries: { limit: 99 },
	});

	const users = res.contents;
	return { props: { users }, revalidate: 1000 };
};
