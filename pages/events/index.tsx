import { GetStaticProps } from "next";
import { Layout } from "../../components/templates/Layout";
import { useMicrocmsClient } from "../../lib/useMicrocmsClient";
import { ListContentsResponse } from "../../types/api/listContent";
import { User } from "../../types/api/user";
import { useState, useEffect, VFC } from "react";
import { SelectMenu } from "../../components/molecules/SelectMenu";
import { Player } from "../../components/atoms/events/Player";


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

	// const selectedUsers = users.filter(
	// 	(user: User) => user.team.toString() === selected
	// );

	// const livee = new Object();
	// selectedUsers.map((user: User) => (livee[user.username] = true));

	if (process.browser) {
		const tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);
	}

	return (
		<Layout title="CRカップ">
			<div className="w-full h-full">
				<div className="absolute top-10 lg:top-20 w-full p-8">
					<SelectMenu
						label="チーム選択"
						teams={teams}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4">
					{users.map(
						(user: User) =>
							// needed to avoid iframe bug
							user.team.toString() === selected && (
								<Player id={user?.youtubeID} name={user.username} />
							)
					)}
				</div>
			</div>
		</Layout>
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
