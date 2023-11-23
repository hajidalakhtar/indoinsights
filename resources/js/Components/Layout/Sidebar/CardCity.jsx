import React from "react";
import {RoomItem, TitleIconCard} from "@/Components/Atoms/Index.jsx";

export default function CardCity({rooms}) {
    return (
        <div
            className=" p-3 mb-3 shadow-sm shadow bg-white rounded-lg  border-b-4 border border-gray-200 "
            rel="noreferrer">
            <TitleIconCard
                title={"Wilayah"}
                fontSize={"text-md"}
                icon={
                    <img
                        src="https://img.icons8.com/color/48/downtown.png"
                        className="w-6 ml-1"
                        alt="Tranding"
                    />
                }
            />
            {rooms.map((room) => {
                return <RoomItem name={room.name} id={room.id} icon={`https://api.dicebear.com/6.x/initials/svg?backgroundColor=3b82f6&seed=${room.name}`} countPost={room.posts.length}
                                 active={false}></RoomItem>
            })}
            {/*<a href="" className="text-sm">Load More</a>*/}
        </div>
    )
}
