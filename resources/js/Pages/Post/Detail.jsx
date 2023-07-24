import DetailLayout from "@/Layouts/DetailLayout.jsx";
import moment from "moment";
import {Link, useForm} from "@inertiajs/react";
import {Button, TitleCard} from "@/Components/Atoms/Index.jsx";
import {AnswerCard, RoomInfoCard} from "@/Components/Molecules/index.jsx";
import {useState} from "react";
import TextEditor from "@/Components/TextEditor.jsx";

export default function Detail({auth, postData, comments, topRoomPost}) {
    const {data, setData, post, processing, errors} = useForm({
        user_id: auth.user.id,
        post_id: postData.id,
        content: '',
    })


    function submitComment(e) {
        e.preventDefault()
        post(route("post.comment-store"), {preserveState: true, preserveScroll: true})
        setData("content", "")
    }


    return (
        <DetailLayout
            auth={auth}
        >
            <div className="w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div
                            target="_blank"
                            className={`rounded-lg border border-b-1 p-5 w-full w-100 bg-white `}
                            rel="noreferrer">
                            <div className="flex w-full items-center justify-between border-b pb-3">
                                <Link href={route("users.show", postData.user.id)}>

                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + postData.user.name}
                                            alt="" className="rounded-full w-10"/>
                                        <div className="pl-1">
                                            <p className="text-1xl font-bold text-slate-700">{postData.user.name}</p>
                                            <p className="text-xs">Anak baru di sini</p>
                                        </div>
                                    </div>
                                </Link>

                                <div className="flex items-center md:space-x-2 space-x-2">
                                    <button
                                        className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">
                                        {moment(postData.created_at).format("DD MMMM YYYY")}
                                    </button>
                                </div>
                            </div>

                            <h1 className="text-3xl font-black mt-5">{postData.title}</h1>
                            <div className="mt-4  font-lato">
                                <Content post={postData}/>
                            </div>


                            <div className="mt-5">

                                {JSON.parse(postData.tags).map((tag) => {
                                    return <span
                                        className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">#{tag}</span>

                                })}

                            </div>

                            {/*<h3 className="mb-4 mt-10 text-lg font-semibold text-gray-900">Comments</h3>*/}
                            {/*<form class="w-full  bg-white rounded-lg px-4 pt-2">*/}
                            {/*    <div class="flex flex-wrap -mx-3 mb-6">*/}
                            {/*        <div class="w-full md:w-full px-3 mb-2 mt-2">*/}
                            {/*                <textarea*/}
                            {/*                    onChange={(e) => setData('content', e.target.value)}*/}
                            {/*                    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"*/}
                            {/*                    name="body" placeholder='Type Your Comment' required*/}
                            {/*                    value={data.content}></textarea>*/}
                            {/*        </div>*/}
                            {/*        <div class="w-full flex items-start md:w-full px-3">*/}
                            {/*            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">*/}
                            {/*                <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24"*/}
                            {/*                     stroke="currentColor">*/}
                            {/*                    <path stroke-linecap="round" stroke-linejoin="round"*/}
                            {/*                          stroke-width="2"*/}
                            {/*                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                            {/*                </svg>*/}
                            {/*                <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>*/}

                            {/*            </div>*/}
                            {/*            <div class="-mr-1">*/}
                            {/*                <input type='submit'*/}
                            {/*                       onClick={submitComment}*/}
                            {/*                       class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"*/}
                            {/*                       value='Post Comment'/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</form>*/}


                        </div>
                        <div className="mt-4 border p-4 rounded-lg bg-white">
                            <TitleCard title="Comment" fontSize="text-xl" extendClass="pb-2"/>
                            <TextEditor
                                value={data.content}
                                handleChangeInput={setData}
                                toolbar={['bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo']}
                                formKey={"content"}
                            />
                            <div className="mt-2 ">

                                <Button
                                    onClick={submitComment}
                                >Submit</Button>
                            </div>


                        </div>
                        <Comment auth={auth} post_id={postData.id} comments={comments}/>

                    </div>
                    <div className={"col-span-4 "}>
                        <RoomInfoCard name={postData.room.name} description={postData.room.description}/>
                        <div className="rounded-lg border border-1 bg-white  w-full p-2">
                            <div className="flex justify-between py-1">
                                <TitleCard title={`Top Cerita di ${postData.room.name}`} extendClass={"ml-2"}/>
                                <svg className="h-4 fill-current text-grey-dark cursor-pointer"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/>
                                </svg>
                            </div>
                            <div className="text-sm mt-2">
                                {topRoomPost.map((item) => {
                                    return (
                                        <div
                                            className="mt-2 p-2  border border-1 rounded-lg ">
                                            <Link href={route("posts.show", item.id)}>
                                                <div className="flex-1  ">
                                                    <div className="font-bold text-md">{item.title}</div>
                                                    <div className="font-medium text-xs mt-1">
                                                        <span>{item.user.name} -{moment(item.created_at).fromNow()} - {item.room.name}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </DetailLayout>
    );
}


function Content(post) {
    post = post.post
    if (post.category === "Posting") {
        return (
            <div className={"post-body"} dangerouslySetInnerHTML={{__html: post.body}}>
            </div>
        );
    } else if (post.category === "Image") {
        return <img src={post.image_url} alt="" className="rounded-sm"/>;
    } else {
        return <p>Video</p>;
    }
}

function Comment({
                     auth, post_id, comments
                 }) {
    const [values, setValues] = useState({
        user_id: auth.user.id,
        post_id: post_id,
        comment_id: "",
        content: '',
    });


    const onChange = (val, comment_id) => {
        setValues(values => ({
            ...values,
            content: val,
            comment_id: comment_id,
        }))
    }

    function submit(e) {
        e.preventDefault()
        router.post(route("post.reply-comment-store"), values)
    }

    return (
        <div className="space-y-4 border-t-2 border-dark pt-5 mb-10">

            {comments.map((comment) => {
                return (
                    <>
                        <AnswerCard
                            category={"post"}
                            auth={auth} post_id={post_id} content={comment.content} target_id={comment.id}
                            comment_user={comment.user} created_at={comment.created_at} replies={comment.replies}/>
                    </>

                    // <div className="flex">
                    //     <div className="flex-shrink-0 mr-3">
                    //         <div className="flex items-center space-x-2">
                    //             <img
                    //                 src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + comment.user.name}
                    //                 alt="" className="rounded-full w-10"/>
                    //
                    //         </div>
                    //
                    //     </div>
                    //     <div
                    //         className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    //         <strong>{comment.user.name}</strong> <span
                    //         className="text-xs text-gray-400 ml-2">{moment(comment.created_at).fromNow()}</span>
                    //         <p className="text-sm">
                    //             {comment.content}
                    //         </p>
                    //
                    //         <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>
                    //         {/*//INFO// sudah bisa di pake untuk form nya */}
                    //
                    //
                    //         <div className="space-y-4">
                    //             {comment.replies.map((reply) => {
                    //                 return (
                    //                     <div className="flex">
                    //                         <div className="flex-shrink-0 mr-3">
                    //                             <img
                    //                                 className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                    //                                 src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + reply.user.name}
                    //                                 alt=""/>
                    //                         </div>
                    //                         <div
                    //                             className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    //                             <strong>{reply.user.name}</strong> <span
                    //                             className="text-xs text-gray-400">{moment(reply.created_at).fromNow()}</span>
                    //                             <p className="text-xs sm:text-sm">
                    //                                 {reply.content}
                    //                             </p>
                    //                         </div>
                    //                     </div>
                    //                 )
                    //             })}
                    //         </div>
                    //     </div>
                    // </div>
                )
            })}

        </div>
    )

}


