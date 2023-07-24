import HomeLayout from "@/Layouts/HomeLayout.jsx";
import React, {useState} from "react";
import {Link} from "@inertiajs/react";
import {CardPost} from "@/Components/Molecules/index.jsx";
import CardAnswer from "@/Components/Molecules/CardAnswer.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Dashboard({auth, postsWithQuestions, rooms, topQuestions, topUser}) {
    const [items, setItems] = useState(postsWithQuestions.data);
    const [hasMore, setHasMore] = useState(true);
    const [next_url, setNextUrl] = useState(postsWithQuestions.next_page_url);


    const fetchData = async () => {
        try {
            const response = await fetch(next_url, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            console.log(data)
            setNextUrl(data.next_page_url)
            setHasMore(data.next_page_url != null)
            setItems(prevItems => [...prevItems, ...data.data]);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <HomeLayout
            auth={auth}
            rooms={rooms}
            question={topQuestions}
            topUser={topUser}
        >
            {route().current() !== "room.show" ? <div
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
            </div> : ""
            }

            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={hasMore}
                endMessage={
                    <p style={{textAlign: "center"}} className={"mb-4"}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                loader={<h4>Loading...</h4>}
            >
                {items.map((postAndQuestion) => {
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
            </InfiniteScroll>
        </HomeLayout>
    );
}
