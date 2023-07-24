import DetailLayout from "@/Layouts/DetailLayout.jsx";
import React, {useState} from "react";
import {Button} from "@/Components/Atoms/Index.jsx";
import {Tab} from "@headlessui/react";
import {Link, useForm} from "@inertiajs/react";
import {CardPost, CardQuestion} from "@/Components/Molecules/index.jsx";

export default function Detail({auth, user, isFollow, FollowAndFollowingCount, posts, questions}) {


    const {data, setData, post, processing, errors} = useForm({
        user_id: auth.user.id,
        target_id: user.id,
    })

    function follow(e) {
        e.preventDefault()
        post(route("user.follow-store"))
    }


    return (
        <DetailLayout
            auth={auth}
        >
            <div className="p-5 border bg-white rounded-lg">
                <div className=" my-2 mx-2 max-w-6xl mx-auto ">
                    <div className="grid grid-cols-12   ">
                        <div className=" col-span-2 visible ">
                            <img
                                className="p-1 w-36 h-36 rounded-full ring-2 ring-gray-300 "
                                src={`https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${user.name}`}

                                alt="Rounded avatar"
                            />
                        </div>
                        <div className=" mt-3 col-span-10  ">
                            <div className="w-full">
                                <p className="text-logo font-bold" style={{fontSize: '27px'}}>
                                    {user.name}
                                </p>
                                <div className="inline-flex" role="alert">
                                    <img
                                        src="https://img.icons8.com/windows/32/000000/marker.png"
                                        className="w-5 h-5 mt-0.5"
                                        alt="Tranding"
                                    />
                                    <p className="font-semibold text-md">Depok</p>
                                </div>

                                <div className="grid grid-flow-col mt-3 auto-cols-max">
                                    <p>
                                        <span className="font-bold">{FollowAndFollowingCount.follow} </span>Followers
                                        •{' '}
                                        <span className="font-bold">{FollowAndFollowingCount.following}</span> Following
                                    </p>
                                </div>
                                <div className={"mt-2"}>
                                    {auth.user.id === user.id ? <Link className={`bg-blue-500 text-sm text-white font-semibold rounded-lg py-2 px-5
                                        } uppercase w-32`} href={route("profile.edit")}> Setting </Link> :
                                        isFollow ?
                                            <Button width={"w-32"} onClick={follow}> unFollow </Button> :
                                            <Button width={"w-32"} onClick={follow}> Follow </Button>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 grid grid-cols-12 gap-3">
                <div className=" col-span-12 ">
                    <PostsTab posts={posts} questions={questions}/>
                </div>
            </div>
        </DetailLayout>

    );
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function PostsTab({posts, questions}) {
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],

    })

    return (
        <div className="w-full">

            <Tab.Group>
                <Tab.List className=" bg-black-100 flex space-x-1 rounded-xl p-1 ">
                    <Tab
                        className={({selected}) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                ' ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-black hover:bg-white/[0.12] '
                            )
                        }
                    >
                        Posts
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                ' ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-black hover:bg-white/[0.12] '
                            )
                        }
                    >
                        Question
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel
                    >
                        {posts.map((post) => {
                            return (
                                <div className="mb-4">
                                    <CardPost post={post}/>
                                </div>
                            )
                        })}
                    </Tab.Panel>
                    <Tab.Panel>
                        {questions.map((question) => {
                            return (
                                <div className="mb-2">
                                    <CardQuestion question={question} user={question.user}/>
                                </div>
                            )
                        })}
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
