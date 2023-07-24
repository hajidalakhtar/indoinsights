import React from "react";

export default function CardRoomInfo(props) {
    return (
        <a
            href="#"
            className="relative block bg-white shadow rounded-lg border-3 p-4  sm:p-6 lg:p-8"
        >
            <div className="flex items-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>

                <h3 className="text-3xl font-bold sm:text-4xl">{props.name}</h3>
            </div>

            <p className="mt-4 font-medium text-gray-500">
                {props.description}
            </p>

            <hr className="my-5"/>

            <div className="grid grid-cols-2 text-center">
                <div><p>10</p>
                    <p>Total Post</p></div>
                <div><p>20</p>
                    <p>Total pertanyaan</p></div>
            </div>
            <hr className="my-5"/>

            <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Follow
            </button>
        </a>

    )
}
