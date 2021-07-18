/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from "next";
import { Layout } from "../../components/templates/Layout";
import { useMicrocmsClient } from "../../lib/useMicrocmsClient";
import { ListContentsResponse } from "../../types/api/listContent";
import { User } from "../../types/api/user";
import { useState, useEffect, VFC, memo } from "react";
import { SelectMenu } from "../../components/molecules/SelectMenu";
import { Player } from "../../components/atoms/events/Player";
import Head from "next/head";
import { Notification } from "../../components/atoms/nav/Notifications";

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

	const [selected, setSelected] = useState(teams.slice(-1)[0]);
	const [cnt, setCnt] = useState(0);

	let [liveList, setLiveList] = useState<
		Array<{ name: string; status: boolean }>
	>([]);
	useEffect(() => {
		users.map((user: User) => {
			liveList.push({ name: user.username, status: false });
		});
	}, []);

	useEffect(() => {
		setCnt(0);
	}, [selected]);

	// console.log(liveList)

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
							selected={selected}
							setSelected={setSelected}
						/>
					</div>
					{/* <p className="text-center font-bold">STREAMING:{cnt}</p> */}
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-4 h-screen">
						{users.map(
							(user: User, index) =>
								// needed to avoid iframe bug
								user.team.toString() === selected && (
									<Player
										key={user.id}
										id={user?.youtubeID}
										name={user.username}
										cnt={cnt}
										setCnt={setCnt}
										isLast={user.username === lastUser(users, selected)}
										liveList={liveList}
										setLiveList={setLiveList}
										idx={index}
									/>
								)
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}

function lastUser(users: any, selected: any) {
	let lst: Array<string> = [];
	users.map(
		(user: User) => user.team.toString() === selected && lst.push(user.username)
	);
	return lst.slice(-1)[0];
}

export const getStaticProps: GetStaticProps = async () => {
	const res: ListContentsResponse<User> = await useMicrocmsClient.get({
		endpoint: "crcup_apex6",
		queries: { limit: 99 },
	});

	const users = res.contents;
	return { props: { users }, revalidate: 1000 };
};
