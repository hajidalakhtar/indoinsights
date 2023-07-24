import {Header, RightBar, Sidebar} from "@/Components/Layout/index.jsx";
import React from "react";
// import {} from "@/Components/Molecule/index.jsx";

export default function HomeLayout({auth, user, header, children, rooms, question, topUser}) {
    return (
        <div
            style={{
                backgroundColor: "#F1F2F2",
            }}>

            <Header
                auth={auth}
            />
            <div className=" max-w-6xl mx-auto lg:px-2 pt-20 min-h-screen">
                <div className="grid grid-cols-10   lg:gap-4">
                    <div className=" col-span-2 invisible lg:visible ">
                        <Sidebar rooms={rooms} question={question}/>
                    </div>
                    <div className=" lg:col-span-5 col-span-10 ">
                        {children}
                    </div>
                    <div className=" col-span-3  invisible lg:visible ">
                        <RightBar topUser={topUser}/>
                    </div>
                </div>
            </div>
        </div>

    );
}
//
// //
// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:  radial-gradient(#ee6b6b 0.5px, transparent 0.5px), radial-gradient(#ee6b6b 0.5px, #e5e5f7 0.5px);
// background-size: 20px 20px;
// background-position: 0 0,10px 10px;
