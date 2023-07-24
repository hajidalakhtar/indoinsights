// import {CardPost, CardRoomInfo} from "@/Components/Card/index.jsx";
import React from "react";
import HomeLayout from "@/Layouts/HomeLayout.jsx";
import {Link} from "@inertiajs/react";
import {CardPost} from "@/Components/Molecules/index.jsx";
import CardAnswer from "@/Components/Molecules/CardAnswer.jsx";

export default function Detail({auth, postsWithQuestions, rooms, topQuestions, topUser}) {
    return (
        <HomeLayout
            auth={auth}
            rooms={rooms}
            question={topQuestions}
            topUser={topUser}
        >
            <div
                className="block w-full p-2 bg-white border border-gray-200 rounded-lg mb-3">
                <div className="grid grid-cols-2 divide-x gap-4">
                    <div className="text-center ">
                        <Link href={route("dashboard")}
                              className={route().current('dashboard') ? "font-black" : "text-slate-500"}>Explore</Link>

                    </div>

                    <div className="text-center ">
                        <Link href={route("following")}
                              className={route().current('following') ? "font-black" : "text-slate-500"}>Your
                            Following</Link>
                    </div>


                </div>
            </div>


            {postsWithQuestions.map((postAndQuestion) => {
                if (postAndQuestion.type === "post") {
                    return (
                        <div className="mb-4">
                            <CardPost post={postAndQuestion}/>
                        </div>
                    )
                }
                if (postAndQuestion.type === "answer") {
                    return (
                        <div className="mb-2">
                            <CardAnswer answer={postAndQuestion}/>
                            {/*<CardQuestion question={postAndQuestion} user={postAndQuestion.user}/>*/}

                        </div>
                    )

                }
            })}


        </HomeLayout>
    );
}
