import {TitleIconCard} from "@/Components/Atoms/Index.jsx";
import {Link} from "@inertiajs/react";
import React from "react";

export default function CardTopUser({topUser}) {
    return (
        <div
            className=" p-3 mb-3 shadow-sm shadow  bg-white rounded-lg border border-gray-200 "
            rel="noreferrer">
            <div className="">
                <TitleIconCard
                    title={"Top User"}
                    fontSize={"text-md"}
                    icon={
                        <img
                            src="https://img.icons8.com/emoji/48/undefined/fire.png"
                            className="w-5"
                            alt="Tranding"
                        />
                    }
                />


                <ul>
                    {topUser.map((user) => {
                        return (
                            <Link href={route("users.show", user.id)}>
                                <li className=" border border-dark rounded-lg flex flex-row mb-2  transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:shadow-lg">
                                    <div
                                        className="select-none cursor-pointer rounded-md flex flex-1 items-center p-2  ">
                                        <img
                                            className={"w-10 h-10 rounded-md mr-2.5"}
                                            src={`https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${user.name}`}
                                        />
                                        <div className="flex-1  ">
                                            <div className="font-medium text-md font-bold">{user.name}</div>
                                            <div className="font-medium text-xs"><span>{user.posts.length} Postingan</span></div>
                                        </div>
                                    </div>
                                </li>
                            </Link>

                        )
                    })}


                </ul>

            </div>

        </div>
    )
}
