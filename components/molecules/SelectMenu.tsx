import { Fragment, memo, useState, VFC } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Teams } from "../../types/events/player";
import { classNames } from "../../lib/tailwindClassNames";

type Props = {
	label: string;
	teams: Array<string>;
	selected: string;
	setSelected: any;
	liveNow: Array<Teams>;
};

export const SelectMenu: VFC<Props> = memo((props) => {
	const { label, teams, selected, setSelected, liveNow } = props;


	return (
		<Listbox value={selected} onChange={setSelected}>
			{({ open }) => (
				<>
					<Listbox.Label className="block text-sm font-medium text-gray-700">
						{label}
					</Listbox.Label>
					<div className="mt-1 relative">
						<Listbox.Button className="neumo bg-white relative w-full border rounded-md shadow-sm pl-3 pr-16 py-2 text-left cursor-default focus:outline-none  focus:border-none sm:text-sm">
							<span className="block truncate">{selected}</span>
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<SelectorIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Listbox.Options
								static
								className="absolute z-20 mt-1 w-full bg-gray-100 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
							>
								{teams.map((team, index) => (
									<Listbox.Option
										key={index}
										className={({ active }) =>
											classNames(
												active ? "text-white bg-indigo-500" : "text-gray-900",
												"cursor-default select-none relative py-2 pl-3 pr-9"
											)
										}
										value={team}
									>
										{({ selected, active }) => (
											<>
												<div className="flex items-center">
													{/* <span
														className={classNames(
															liveNow[0].status
																? "bg-green-400"
																: "bg-gray-200",
															"flex-shrink-0 inline-block h-2 w-2 rounded-full"
														)}
														aria-hidden="true"
													/> */}
													<span
														className={classNames(
															selected ? "font-semibold" : "font-normal",
															"ml-3 block truncate"
														)}
													>
														{team}
													</span>
												</div>

												{selected ? (
													<span
														className={classNames(
															active ? "text-white" : "text-indigo-500",
															"absolute inset-y-0 right-0 flex items-center pr-4"
														)}
													>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
});
