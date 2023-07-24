import {useState} from "react";
import moment from "moment";
import {Link, router} from "@inertiajs/react";


export default function CardQuestion({question, user}) {
    const [isComment, setIsComment] = useState(false);
    const [voteType, setVoteType] = useState('');

    const handleVote = (type) => {
        router.post(route("question.vote-store"), {
            vote_type: type,
            target_id: question.id,
        }, {preserveState: true, preserveScroll: true})
        setVoteType(type)
    }

    return (
        <>
            <div className="flex ">
                <div className="grid grid-cols-12 border rounded-lg  border-b-4 w-full  bg-white ">
                    <div className="col-span-1 border-r  rounded-l-lg">
                        <div className="ml-5 mt-2.5">
                            <div className="w-1/12 flex flex-col text-center text-center">
                                <button className="text-xs"
                                        onClick={() => handleVote('upvote')}
                                >
                                    <svg
                                        className={(`w-6 fill-current ${voteType == "upvote" || question.user_vote  == "upvote" ? "" : "text-gray-400"}`)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"/>
                                    </svg>
                                </button>
                                <span className="text-xs font-semibold my-1 ml-2">{question.vote_count}</span>
                                <button className="text-xs"
                                        onClick={() => handleVote('downvote')}
                                >
                                    <svg
                                        className={(`w-6 fill-current ${voteType == "downvote" || question.user_vote  == "downvote"  ? "" : "text-gray-400"}`)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path d="M7 10V2h6v8h5l-8 8-8-8h5z"/>

                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-11  bg-white px-3 rounded-r-lg">
                        <div className="my-4 ">
                            <Link href={route("question.show", {id: question.id})}>
                                <h2 className="text-xl font-black mb-2 hover:text-blue-600 leading-7">
                                    <p>{question.question}</p>
                                </h2>
                            </Link>

                        </div>
                        <div className="inline-flex items-center my-1">
                            <div className="flex hover:bg-grey-lighter ">
                                <span
                                    className="text-xs font-semibold text-gray-400">Posted by {user.name}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                 className="bi bi-dot text-gray-400" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                            <div className="flex hover:bg-grey-lighter p-1">
                                <span
                                    className="text-xs font-semibold text-gray-400">{moment(question.created_at).fromNow()}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                 className="bi bi-dot text-gray-400" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                            <div className="flex hover:bg-grey-lighter p-1">
                                <span className="text-xs font-semibold text-gray-400">Bandung</span>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                 className="bi bi-dot text-gray-400" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                            <div className="flex hover:bg-grey-lighter p-1">
                                <span
                                    className="text-xs font-semibold text-gray-400">{question.answers.length} Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


// Reddit card


{/*<div className="flex  ">*/
}
{/*    <a*/
}
{/*        // href={route('posts.show', props.post.id)}*/
}
{/*        className={`border rounded-lg   border-b-4  p-5 w-full bg-white  w-100 `}*/
}
{/*        rel="noreferrer">*/
}
{/*        <div className="flex w-full items-center justify-between border-b pb-3">*/
}
{/*            <div className="flex items-center space-x-2">*/
}
{/*                <img*/
}
{/*                    src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + props.user.name}*/
}
{/*                    alt="" className="rounded-full w-10"/>*/
}
{/*                <div className="pl-1">*/
}
{/*                    <p className="text-1xl font-bold text-slate-700">{props.user.name}</p>*/
}
{/*                    <p className="text-xs">Anak baru di sini</p>*/
}
{/*                </div>*/
}
{/*            </div>*/
}

{/*            <div className="flex items-center md:space-x-2 space-x-2">*/
}
{/*                /!*<button*!/*/
}
{/*                /!*    className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">*!/*/
}
{/*                /!*    {props.post.room.name}*!/*/
}
{/*                /!*</button>*!/*/
}
{/*                /!*<button*!/*/
}
{/*                /!*    className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">*!/*/
}
{/*                /!*    {props.post.category}*!/*/
}
{/*                /!*</button>*!/*/
}
{/*            </div>*/
}
{/*        </div>*/
}

{/*        <div className="my-4">*/
}
{/*            <h2 className="text-2xl font-black mb-2 hover:text-blue-600 leading-7">*/
}
{/*                <p>{props.question}</p>*/
}
{/*            </h2>*/
}
{/*            /!*<div className="mb-2">*!/*/
}
{/*            /!*    {JSON.parse(props.post.tags).map((tag) => {*!/*/
}
{/*            /!*        return <a href="#" className="text-sm text-gray-600 p-1 hover:text-black">*!/*/
}
{/*            /!*            <span className="text-opacity-50">#</span>*!/*/
}
{/*            /!*            {tag}*!/*/
}
{/*            /!*        </a>*!/*/
}

{/*            /!*    })}*!/*/
}
{/*            /!*</div>*!/*/
}
{/*            /!*<div className="mb-1 leading-6 ">*!/*/
}
{/*            /!*    <Content post={props.post}/>*!/*/
}
{/*            /!*</div>*!/*/
}


{/*        </div>*/
}

{/*        <div>*/
}
{/*            <div className="flex items-center justify-between text-slate-500">*/
}
{/*                <div className="inline-flex rounded-md shadow-sm" role="group">*/
}
{/*                    <button*/
}
{/*                        type="button"*/
}
{/*                        className={`${"upvote" === 'upvote' ? ' bg-neutral-200 border-neutral-400 ' : ''} inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border   `}>*/
}
{/*                        <img*/
}
{/*                            src="https://img.icons8.com/plumpy/24/undefined/up--v1.png"*/
}
{/*                            alt="Up-icon"*/
}
{/*                            className="w-3.5 h-3.5 mr-1"*/
}
{/*                        />*/
}
{/*                        3*/
}
{/*                    </button>*/
}

{/*                    <button*/
}
{/*                        // onClick={(e) => addUpvote(e, 'downvote')}*/
}
{/*                        type="button"*/
}
{/*                        className={`${"upvote" === 'downvote' ? ' bg-neutral-200 border-neutral-400 ' : ''} inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border  `}>*/
}
{/*                        <img*/
}
{/*                            src="https://img.icons8.com/plumpy/24/undefined/down--v1.png"*/
}
{/*                            alt="down-icon"*/
}
{/*                            className="w-3.5 h-3.5"*/
}
{/*                        />*/
}
{/*                    </button>*/
}
{/*                    <button*/
}
{/*                        // onClick={(e) => commentModalOpen(e)}*/
}
{/*                        type="button"*/
}
{/*                        className=" ml-2 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-md border  ">*/
}
{/*                        <div className="flex cursor-pointer items-center transition  ">*/
}
{/*                            <img*/
}
{/*                                src="https://img.icons8.com/plumpy/24/000000/topic.png"*/
}
{/*                                alt="Icon Share"*/
}
{/*                                className="w-5 h-5"*/
}
{/*                            />*/
}
{/*                            &nbsp;33*/
}
{/*                        </div>*/
}
{/*                    </button>*/
}
{/*                </div>*/
}

{/*                <div className="flex space-x-4 md:space-x-8">*/
}
{/*                    <button*/
}
{/*                        id="dropdownDefault"*/
}
{/*                        data-dropdown-toggle="dropdown"*/
}
{/*                        type="button"*/
}
{/*                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-md border  ">*/
}
{/*                        <div className="flex cursor-pointer items-center transition  ">*/
}
{/*                            <img*/
}
{/*                                src="https://img.icons8.com/plumpy/24/000000/share.png"*/
}
{/*                                alt="Icon Share"*/
}
{/*                                className="w-5 h-5"*/
}
{/*                            />*/
}
{/*                            <span className="text-sm ml-1">Share</span>*/
}
{/*                        </div>*/
}
{/*                    </button>*/
}
{/*                    <div*/
}
{/*                        id="dropdown"*/
}
{/*                        className={`${true ? 'hidden' : ''} z-10 w-44 mt-12 bg-white  rounded divide-y divide-gray-100 shadow   absolute '`}>*/
}
{/*                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDefault">*/
}
{/*                            <li>*/
}
{/*                                <div className="flex items-center pl-3 p-2  ">*/
}
{/*                                    <img*/
}
{/*                                        src="https://img.icons8.com/color/48/000000/facebook-new.png"*/
}
{/*                                        className="w-6"*/
}
{/*                                    />*/
}
{/*                                    <a href="#" className=" font-bold block py-1 px-1.5  ">*/
}
{/*                                        Facebook*/
}
{/*                                    </a>*/
}
{/*                                </div>*/
}
{/*                            </li>*/
}
{/*                            <li>*/
}
{/*                                <div className="flex items-center pl-3 p-2  ">*/
}
{/*                                    <img*/
}
{/*                                        src="https://img.icons8.com/color/48/000000/twitter--v1.png"*/
}
{/*                                        className="w-6"*/
}
{/*                                    />*/
}
{/*                                    <a href="#" className=" font-bold block py-1 px-1.5  ">*/
}
{/*                                        Twitter*/
}
{/*                                    </a>*/
}
{/*                                </div>*/
}
{/*                            </li>*/
}
{/*                            <li>*/
}
{/*                                <div className="flex items-center pl-3 p-2  ">*/
}
{/*                                    <img*/
}
{/*                                        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"*/
}
{/*                                        className="w-6"*/
}
{/*                                    />*/
}
{/*                                    <a href="#" className=" font-bold block py-1 px-1.5  ">*/
}
{/*                                        Whatsapp*/
}
{/*                                    </a>*/
}
{/*                                </div>*/
}
{/*                            </li>*/
}
{/*                        </ul>*/
}
{/*                    </div>*/
}
{/*                </div>*/
}

{/*            </div>*/
}
{/*        </div>*/
}
{/*    </a>*/
}
{/*</div>*/
}
