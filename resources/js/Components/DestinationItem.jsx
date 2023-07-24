import React from 'react';
import {Link} from "@inertiajs/react";

export default function DestinationItem(props) {

    return (
        <>
            <Link href={route("room.show", 1)}>
                <div className="mt-0.5 w-100">
                    <button
                        className={`inline-flex w-48   items-center py-2 px-2 pr-4 text-sm text-gray-700   ${
                            props.active ? ' bg-blue-100 ' : 'bg-white '
                        }rounded-lg `}>
                        <div className="grid col-2 gap-4">

                            <div
                                className={`text-xs ${
                                    props.active ? 'bg-white ' : 'bg-gray-200 '
                                } rounded-lg  text-white  mr-2`}>
                                <div
                                    className={"bg-cover bg-[url('" + props.icon + "')] flex flex-col rounded-md w-8 h-8 bg-gray-300 justify-center items-center"}>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-md font-semibold">
                                {props.name}
                            </p>

                            <p className="text-xs font-semibold">
                                {props.room.name}

                            </p>
                        </div>

                    </button>
                </div>
            </Link>


        </>
    );
}

// dark:bg-gray-800 dark:text-white
