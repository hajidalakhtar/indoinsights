import React from "react";
import CardCity from "@/Components/Layout/Sidebar/CardCity.jsx";
import {TitleIconCard} from "@/Components/Atoms/Index.jsx";
import {Link} from "@inertiajs/react";

export default function Index({rooms, question}) {
    return (
        <>
            <div
                className=" p-3 mb-3 shadow-sm shadow bg-white rounded-lg  border-b-4 border border-gray-200 "
                rel="noreferrer">
                <TitleIconCard title={"Menu"} fontSize={"text-md"}/>
                <ul>
                <li>
                    <a href="#"
                       className="flex items-center p-2 text-gray-900 rounded-lg  bg-blue-100  group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-house-door-fill w-5 h-5" viewBox="0 0 16 16">
                            <path
                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                        </svg>
                        <Link className="ml-2 font-semibold" href={route("dashboard")}>Home</Link>

                    </a>
                </li>
                    <li className="mt-2">
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-patch-question-fill w-5 h-5" viewBox="0 0 16 16">
                                <path
                                    d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                            </svg>
                            {/*<Link className="ml-3" href={route("dashboard")}>Home</Link>*/}
                            <Link className="ml-2 font-semibold" href={route("question.index")}>Forum</Link>

                        </a>
                    </li>
                </ul>
            </div>

            <CardCity rooms={rooms}/>
            {/*<div*/}
            {/*    className=" p-3 mb-3 shadow-sm shadow  bg-white rounded-lg border-b-4 border border-gray-200 "*/}
            {/*    rel="noreferrer">*/}
            {/*    <TitleIconCard*/}
            {/*        title={"Tempat Wisata"}*/}
            {/*        fontSize={"text-md"}*/}
            {/*        icon={*/}
            {/*            <img*/}
            {/*                src="https://img.icons8.com/color/48/summer-landscape.png"*/}
            {/*                className="w-6 ml-1"*/}
            {/*                alt="Tranding"*/}
            {/*            />*/}
            {/*        }*/}
            {/*    />*/}
            {/*</div>*/}
        </>

    )
        ;
}
