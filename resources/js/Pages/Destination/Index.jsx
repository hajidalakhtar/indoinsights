import {Header} from "@/Components/Layout/index.jsx";
import React from "react";
// import {CardLocation} from "@/Components/Card/index.jsx";

export default function Destination() {
    return (
        <div>
            <Header/>
            <div className="mx-28 mt-24  ">
                <section
                    className="rounded-lg bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1518070588484-2b53926cba76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] ">
                    <div className="py-24 px-32 mx-auto max-w-screen-xl text-center z-10 relative">
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                        <form>
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 "
                                         fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                       placeholder="Search Mockups, Logos..." required/>
                                <button type="submit"
                                        className="text-white absolute right-6 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 ">Search
                                </button>
                            </div>
                        </form>
                    </div>
                </section>



                <h1 className="text-2xl font-bold mt-10">Ways to tour Bandung</h1>
                <p className="text-md font-light">More things to do in Jakarta</p>
                {/*<div className="grid grid-cols-4 gap-4 mt-3">*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*</div>*/}



                <h1 className="text-2xl font-bold mt-10">Ways to tour Bandung</h1>
                <p className="text-md font-light">More things to do in Jakarta</p>
                {/*<div className="grid grid-cols-4 gap-4 mt-3">*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*    <CardLocation/>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}
