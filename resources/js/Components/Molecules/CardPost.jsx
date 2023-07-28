import "../../../css/card.css"
import {useState} from "react";
import {Link, router} from "@inertiajs/react";

export default function CardPost({post}) {
    const [voteType, setVoteType] = useState(post.user_vote);
    const [voteCount, setVoteCount] = useState(post.vote_count);

    const handleVote = (type) => {


        router.post(route("question.vote-store"), {
            vote_type: type,
            target_id: post.id,
        }, {preserveState: true, preserveScroll: true});

        // console.log(voteCount)

        if (voteType !== type) {
            if (type === "upvote") {
                setVoteCount(voteCount === -1 ? voteCount + 2 : voteCount + 1);
            } else if (type === "downvote") {
                setVoteCount(voteCount === 1 ? voteCount - 2 : voteCount - 1);
            }
        }
        setVoteType(type);


    };
    return (
        <>
            <div className="flex  ">
                <span
                    className={`border rounded-lg   border-b-4  p-5 w-full bg-white  w-100 `}
                    rel="noreferrer">
                    <div className="flex w-full items-center justify-between border-b pb-3">
                            <Link href={route("users.show", post.user.id)}>
                        <div className="flex items-center space-x-2">
                            <img
                                src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + post.user.name}
                                alt="" className="rounded-full w-10"/>
                            <div className="pl-1">
                                <p className="text-1xl font-bold text-slate-700">{post.user.name}</p>
                                <p className="text-xs">Anak baru di sini</p>
                            </div>
                        </div>
                                </Link>
                        <div className="flex items-center md:space-x-2 space-x-2">
                            <button
                                className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">
                                {post.room.name}
                            </button>
                            <button
                                className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">
                                {post.category}
                            </button>
                        </div>
                    </div>
                    <Link href={route('posts.show', post.id)}>
                         <div className="my-4">
                        <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 leading-7 ">
                            <p>{post.title}</p>
                        </h2>
                        <div className="mb-2">
                            {JSON.parse(post.tags).map((tag) => {
                                return <a href="#" className="text-sm text-gray-600 p-1 hover:text-black">
                                    <span className="text-opacity-50">#</span>
                                    {tag}
                                </a>

                            })}
                        </div>
                        <div className="mb-1 leading-6  font-lato">
                            <Content post={post}/>
                        </div>


                    </div>
                    </Link>


                    <div>
                        <div className="flex items-center justify-between text-slate-500">
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <button
                                    type="button"
                                    onClick={() => handleVote('upvote')}
                                    className={`${voteType === 'upvote' ? ' bg-neutral-200 border-neutral-400 ' : ''} inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border   `}>
                                    <img
                                        src="https://img.icons8.com/plumpy/24/undefined/up--v1.png"
                                        alt="Up-icon"
                                        className="w-3.5 h-3.5 mr-1"
                                    />
                                    {voteCount > 0 ? voteCount : ""}
                                </button>

                                <button
                                    onClick={() => handleVote('downvote')}
                                    type="button"
                                    className={`${voteType === 'downvote' ? ' bg-neutral-200 border-neutral-400 ' : ''} inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border  `}>
                                                                       {voteCount < 0 ? voteCount : ""}

                                    <img
                                        src="https://img.icons8.com/plumpy/24/undefined/down--v1.png"
                                        alt="down-icon"
                                        className="w-3.5 h-3.5 ml-1"
                                    />
                                </button>
                                <button
                                    // onClick={(e) => commentModalOpen(e)}
                                    type="button"
                                    className=" ml-2 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-md border  ">
                                    <div className="flex cursor-pointer items-center transition  ">
                                        <img
                                            src="https://img.icons8.com/plumpy/24/000000/topic.png"
                                            alt="Icon Share"
                                            className="w-5 h-5"
                                        />
                                        &nbsp;{post.comments.length}
                                    </div>
                                </button>
                            </div>

                            <div className="flex space-x-4 md:space-x-8">
                                <button
                                    id="dropdownDefault"
                                    data-dropdown-toggle="dropdown"
                                    type="button"
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-md border  ">
                                    <div className="flex cursor-pointer items-center transition  ">
                                        <img
                                            src="https://img.icons8.com/plumpy/24/000000/share.png"
                                            alt="Icon Share"
                                            className="w-5 h-5"
                                        />
                                        <span className="text-sm ml-1">Share</span>
                                    </div>
                                </button>
                                <div
                                    id="dropdown"
                                    class={`${true ? 'hidden' : ''} z-10 w-44 mt-12 bg-white  rounded divide-y divide-gray-100 shadow   absolute '`}>
                                    <ul class="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDefault">
                                        <li>
                                            <div class="flex items-center pl-3 p-2  ">
                                                <img
                                                    src="https://img.icons8.com/color/48/000000/facebook-new.png"
                                                    className="w-6"
                                                />
                                                <a href="#" class=" font-bold block py-1 px-1.5  ">
                                                    Facebook
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center pl-3 p-2  ">
                                                <img
                                                    src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                                                    className="w-6"
                                                />
                                                <a href="#" class=" font-bold block py-1 px-1.5  ">
                                                    Twitter
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center pl-3 p-2  ">
                                                <img
                                                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                                                    className="w-6"
                                                />
                                                <a href="#" class=" font-bold block py-1 px-1.5  ">
                                                    Whatsapp
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </span>
            </div>
        </>

    )
}


function Content(post) {
    post = post.post
    if (post.category === "Posting") {
        return (
            <div className="card-posting" dangerouslySetInnerHTML={{__html: post.body}}>
            </div>
        );
    } else if (post.category === "Image") {
        return <img src={post.image_url} alt="" className="rounded-lg"/>;
    } else {
        return <p>Video</p>;
    }
}




