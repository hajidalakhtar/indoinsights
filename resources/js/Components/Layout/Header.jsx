import {Link, router} from "@inertiajs/react";
import {Menu, Transition} from "@headlessui/react";
import React, {Fragment} from "react";

export default function Header({auth}) {

    return (

        <nav
            className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   ">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <Link href={route("dashboard")} className="flex ml-2 md:mr-10">
                            <span
                                className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap uppercase">Indoinsights</span>
                        </Link>


                        {/*<div className="hidden w-full md:block md:w-auto" id="navbar-default">*/}
                        {/*    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">*/}
                        {/*        <li>*/}
                        {/*            <a href={route("dashboard")}*/}
                        {/*               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "*/}
                        {/*               aria-current="page">Home</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <Link href={route("question.index")}*/}
                        {/*                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Forum</Link>*/}
                        {/*        </li>*/}

                        {/*    </ul>*/}
                        {/*</div>*/}

                    </div>
                    {/*<Menu.Button*/}
                    {/*    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 ">*/}


                    {/*</Menu.Button>*/}
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            <div>
                                {/*<p>Hi, {JSON.stringify(auth)}</p>*/}

                                <button type="button"

                                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>

                                </button>
                            </div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button
                                        className=" flex ">
                                        <div
                                            className={"flex text-sm mr-0.5 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"}>
                                            <img className="w-8 h-8 rounded-full"
                                                 src={`https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${auth.user.name}`}
                                                 alt="user photo"/>

                                        </div>
                                        <p className={"ml-2 mt-0.5 font-semibold "}>{auth.user.name}</p>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                <Link
                                                    href={route("users.show", auth.user.id)}
                                                    className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Profile
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {/*<form action={route('logout')} method="POST">*/}

                                                    {/*<input type="hidden" name="_csrf" value={router.csrf_token} />*/}
                                                    {/*<input type="hidden" name="_token" :value="this.$page.props.csrf_token">*/}


                                                    <button type="button"
                                                            onClick={() => {
                                                                router.post(route("logout"), {
                                                                    // _token: this.$page.props.csrf_token,
                                                                })
                                                            }}
                                                            className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                                        Keluar
                                                    </button>
                                                {/*</form>*/}

                                            </Menu.Item>
                                        </div>

                                    </Menu.Items>
                                </Transition>

                            </Menu>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
