export default function CardSearch() {
    return (

        <div
            className="block w-full p-6 bg-white border border-gray-200 rounded-lg ">
            <form>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium  sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 " fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 "
                           placeholder="Search Mockups, Logos..." required/>
                    <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search
                    </button>
                </div>
            </form>


            {/*<div className="grid grid-cols-3 divide-x gap-4 mt-4">*/}
            {/*    <div className="text-center">*/}
            {/*        <button>Tanya</button>*/}
            {/*    </div>*/}

            {/*    <div className="text-center">*/}
            {/*        <button>Review</button>*/}
            {/*    </div>*/}

            {/*    <div className="text-center">*/}
            {/*        <button>Cerita</button>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>


    )
}
