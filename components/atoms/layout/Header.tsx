import React, { memo, VFC, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { NavContent } from "../nav/NavContent";
import { MainLogo } from "../../img/svgs/MainLogo";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const navigation = [
	{ name: "Dashbord" },
	{ name: "Teams" },
	{ name: "Projects" },
	{ name: "Calendar" },
];

export const Header: VFC = memo(() => {
	return (
		<header>
			<h2 className="sr-only">Header</h2>
			<Disclosure as="nav" className="shadow">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex justify-between h-16">
								<div className="flex">
									<div className="flex-shrink-0 flex items-center">
										<Link href="/">
											<MainLogo className="block lg:h-10 h-8 w-auto" />
										</Link>
									</div>
									<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
										{navigation.map((item, index) => (
											<NavContent key={index} name={item.name} />
										))}
									</div>
								</div>
								{/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
									<Menu as="div" className="ml-3 relative">
										{({ open }) => (
											<>
												<div>
													<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
														<span className="sr-only">Open user menu</span>
														<Image
															className="rounded-md"
															src={icon}
															alt="Picture of the author"
															width="30"
															height="30"
														/>
													</Menu.Button>
												</div>
												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items
														static
														className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
													>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Your Profile
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Settings
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Sign out
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</>
										)}
									</Menu> 
								</div> */}
								<div className="-mr-2 flex items-center sm:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="pt-2 pb-3 space-y-1">
								{navigation.map((item, index) => (
									<NavContent key={index} name={item.name} hamburger />
								))}
							</div>
							{/* 
							<div className="pt-4 pb-3 border-t border-gray-200">
								<div className="flex items-center px-4">
									<div className="flex-shrink-0">
										<Image
											className="rounded-md"
											src={icon}
											alt="Picture of the author"
											width="40"
											height="40"
										/>
									</div>
									<div className="ml-3">
										<div className="text-base font-medium text-gray-800">
											Fox
										</div>
										<div className="text-sm font-medium text-gray-500">
											fox@example.com
										</div>
									</div>
									<button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

															
								<div className="mt-3 space-y-1">
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Your Profile
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Settings
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Sign out
									</a>
								</div>
							</div> */}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</header>
	);
});
