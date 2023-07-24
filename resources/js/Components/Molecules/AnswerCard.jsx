import moment from "moment";
import {Disclosure, Transition} from "@headlessui/react";
import {useState} from "react";
import {router} from "@inertiajs/react";

export default function AnswerCard({auth, post_id, content, target_id, comment_user, created_at, replies, category}) {

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
        router.post(route("post.reply-comment-store"), values, {preserveState: true, preserveScroll: true})
        onChange("", "")
    }

    return (
        <div className={` rounded-lg border border-b-1 p-5 w-full w-100 bg-white `}>
            <div className="flex items-center gap-4">
                <img
                    alt="Developer"
                    src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + comment_user.name}

                    className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-md font-medium text-dark">{comment_user.name}</h3>
                </div>
            </div>
            <div className="mt-3">
                <div className="font-normal text-lg"
                     dangerouslySetInnerHTML={{__html: content}}></div>

            </div>
            <Disclosure>
                <div className="inline-flex items-center my-1">

                    <p className="text-xs font-semibold text-gray-400">
                        {replies != null ? replies.length : "0"}
                    </p>

                    <div className="flex hover:bg-grey-lighter p-1">
                        <Disclosure.Button className="text-xs font-semibold text-gray-400">
                            Reply
                        </Disclosure.Button>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                         fill="currentColor"
                         className="bi bi-dot text-gray-400" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                    <div className="flex hover:bg-grey-lighter p-1">
                                            <span
                                                className="text-xs font-semibold text-gray-400">{moment(created_at).fromNow()}</span>
                    </div>


                </div>

                <Transition>
                    <Disclosure.Panel className="text-gray-500">
                        <div className={"mt-3"}>
                            <div className={"mb-3"}>
                                <textarea onChange={(e) => onChange(e.target.value, target_id)}
                                          className="w-full h-20 rounded"
                                          value={values.content}
                                          placeholder={"Comment"}></textarea>
                                <button
                                    onClick={submit}
                                    className="bg-blue-500 text-sm text-white font-semibold rounded-lg py-1 px-5 uppercase ">Submit
                                </button>
                            </div>

                            <div className={"mt-8"}>
                                {replies == null ? "" : replies.map((reply) => {
                                    return (
                                        <div className="flex items-center space-x-2 mt-3">
                                            <div className="flex flex-shrink-0 self-start cursor-pointer">
                                                <img
                                                    src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + reply.user.name}
                                                    alt="" className="h-9 w-9 object-fill rounded-full"/>
                                            </div>
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="block">
                                                    <div className="w-auto  px-2 pb-2">
                                                        <div className="font-medium">
                                                            <a href="#" className="hover:underline text-xl text-black ">
                                                                <small>{reply.user.name}</small>
                                                            </a>
                                                        </div>
                                                        <div className="text-mf text-black">
                                                            {reply.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
                                                <a href="#" className="">
                                                    <div
                                                        className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
                                                        <svg className="w-4 h-6" fill="none" stroke="currentColor"
                                                             viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"
                                                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                        </svg>
                                                    </div>

                                                </a>
                                            </div>
                                        </div>

                                    )
                                })}


                            </div>

                        </div>
                    </Disclosure.Panel>
                </Transition>

            </Disclosure>
        </div>
    )

}
