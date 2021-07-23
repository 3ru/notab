import { VFC } from "react";
import { classNames } from "../../../lib/tailwindClassNames";
import { User } from "../../../types/api/user";
import { LiveStatuses } from "../../../types/events/player";

type Props = {
	users: Array<User>;
	liveStatus: LiveStatuses;
	select: string;
};

export const Tables: VFC<Props> = (props) => {
	const { users, liveStatus, select } = props;
	console.log(liveStatus[select]);

	return (
		<div className="flex flex-col my-8">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-150">
								<tr>
									<th
										scope="col"
										className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										所属
									</th>
									<th
										scope="col"
										className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										名前
									</th>
									<th
										scope="col"
										className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										チーム
									</th>
									<th
										scope="col"
										className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										配信状態
									</th>
									<th
										scope="col"
										className="py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Twitter
									</th>
									<th
										scope="col"
										className="pr-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Youtube
									</th>
								</tr>
							</thead>
							<tbody className="bg-gray-100 divide-y divide-gray-200">
								{users.map((person) => {
									const status =
										liveStatus[select] === undefined
											? false
											: liveStatus[select].members[person.username]
											? true
											: false;
									return (
										<tr key={person.id}>
											<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
												{person.orgs.toString()}
											</td>
											<td className="px-6 py-2 whitespace-nowrap">
												<div className="flex items-center">
													<div className="text-sm font-medium text-gray-900">
														{person.username}
													</div>
												</div>
											</td>
											<td className="px-6 py-2 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{person.team}
												</div>
											</td>
											<td className="px-6 py-2 whitespace-nowrap">
												<span
													className={classNames(
														"px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded",
														status
															? "bg-red-500 text-white"
															: " bg-gray-300 text-white"
													)}
												>
													{status ? "生放送中" : "オフライン"}
												</span>
											</td>
											<td className="px-3 py-2 whitespace-nowrap text-right text-sm">
												<a
													href={"https://twitter.com/" + person.twitter}
													target="_blank"
													className="text-cyan-600 hover:text-cyan-900 font-semibold hover:underline italic"
													rel="noreferrer noopener"
												>
													Link
												</a>
											</td>

											<td className="px-7 py-2 whitespace-nowrap text-right text-sm">
												<a
													href={
														"https://www.youtube.com/channel/" +
														person.youtubeID
													}
													target="_blank"
													// className="text-rose-600 hover:text-rose-900 font-semibold "
													className="text-orange-600 hover:text-orange-900 font-semibold hover:underline italic"
													rel="noreferrer noopener"
												>
													Link
												</a>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
