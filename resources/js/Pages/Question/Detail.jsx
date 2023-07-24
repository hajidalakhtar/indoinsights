import DetailLayout from "@/Layouts/DetailLayout.jsx";
import {useState} from "react";
import {router} from "@inertiajs/react";
import TextEditor from "@/Components/TextEditor.jsx";
import {Button, TitleCard} from "@/Components/Atoms/Index.jsx";
import {AnswerCard, TipsCard} from "@/Components/Molecules/index.jsx";

export default function Detail({auth, question}) {

    const [values, setValues] = useState({
        user_id: auth.user.id,
        question_id: question.id,
        answer: '',
    })

    function handleChangeInput(key, value) {
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('answer.store'), values)
        handleChangeInput('answer', '')
    }

    return (
        <DetailLayout
            auth={auth}
        >
            <div className="w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div
                            className={`rounded-lg border border-b-1 p-5 w-full w-100 bg-white `}
                            rel="noreferrer">

                            <div className="flex w-full items-center justify-between border-b pb-3">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + question.user.name}
                                        alt="" className="rounded-full w-10"/>
                                    <div className="pl-1">
                                        <p className="text-1xl font-bold text-slate-700">{question.user.name}</p>
                                        <p className="text-xs">Anak baru di sini</p>
                                    </div>
                                </div>

                                <div className="flex items-center md:space-x-2 space-x-2">
                                    {/*<button*/}
                                    {/*    className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="rounded-2xl border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold">*/}
                                    {/*    {props.post.category}*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold my-5">{question.question}</h1>

                            {/*<div className="mt-5">*/}
                            {/*<span*/}
                            {/*    className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">#indonesia</span>*/}
                            {/*    <span*/}
                            {/*        className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">#bandung-keren</span>*/}
                            {/*</div>*/}

                        </div>
                        <div className="mt-4 border p-4 rounded-lg bg-white">
                            <TitleCard title="Jawaban" fontSize="text-xl" extendClass="pb-2"/>
                            <TextEditor
                                value={values.answer}
                                handleChangeInput={handleChangeInput}
                                toolbar={['bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo']}
                                formKey={"answer"}
                            />
                            <div className="mt-2 ">
                                {/*<button type="button"*/}
                                {/*        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit*/}
                                {/*</button>*/}
                                <Button
                                    onClick={handleSubmit}
                                >Submit</Button>
                            </div>

                        </div>

                        {question.answers.map((answer) => {
                            return (
                                <>
                                <div className="mt-4">
                                    <AnswerCard
                                        replies={answer.replies}
                                        category={"answer"}
                                        auth={auth} post_id={question.id} content={answer.answer} target_id={answer.id}
                                        comment_user={answer.user} created_at={answer.created_at}
                                        // replies={comment.replies}
                                    />
                                    {/*<AnswerCard auth={auth} content={answer.answer} user={answer.user} created_at={answer.created_at}/>*/}
                                </div>
                                </>

                            )
                        })}

                    </div>


                    <div className={"col-span-4"}>
                        {/*<div>*/}
                        {/*    <TipsCard title={"Pertanyaan serupa"}>*/}
                        {/*        <ol className="list-decimal ml-4 mt-3">*/}
                        {/*            <li>Gunakan bahasa yang sopan dan jelas</li>*/}
                        {/*            <li>Berikan penjelasan, elaborasi, atau contoh untuk mendukung jawaban Anda</li>*/}
                        {/*            <li>Berikan informasi tambahan yang relevan dan membantu penanya</li>*/}
                        {/*            <li>Jangan tersinggung atau marah jika jawaban yang Anda terima tidak berkenan bagi*/}
                        {/*                Anda*/}
                        {/*            </li>*/}
                        {/*        </ol>*/}
                        {/*    </TipsCard>*/}
                        {/*</div>*/}
                        <div >
                            <TipsCard title={"Tips Bertanya"}>
                                <ol className="list-decimal ml-4 mt-3">
                                    <li>Gunakan bahasa yang sopan dan jelas</li>
                                    <li>Berikan penjelasan, elaborasi, atau contoh untuk mendukung jawaban Anda</li>
                                    <li>Berikan informasi tambahan yang relevan dan membantu penanya</li>
                                    <li>Jangan tersinggung atau marah jika jawaban yang Anda terima tidak berkenan bagi
                                        Anda
                                    </li>
                                </ol>
                            </TipsCard>
                        </div>

                    </div>

                </div>
            </div>

        </DetailLayout>
    )
        ;
}

//
// //
// //
// <div className={`mt-5 rounded-lg border border-b-1 p-5 w-full w-100 bg-white `}>
//     <TextEditor
//         value={values.answer}
//         handleChangeInput={handleChangeInput}
//         toolbar={['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo']}
//         formKey={"answer"}
//     />
// //     <button onClick={handleSubmit}>SUBMIT</button>
// //     <div className="mt-10">
// //         <div className='flex flex-col'>
// //             <div className='flex items-center'>
// //                 {/*<UserAvatar*/}
// //                 {/*    user={{*/}
// //                 {/*        name: comment.author.name || null,*/}
// //                 {/*        image: comment.author.image || null,*/}
// //                 {/*    }}*/}
// //                 {/*    className='h-6 w-6'*/}
// //                 {/*/>*/}
// //                 <img
// //                     src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + "answer.user.name"}
// //                     className="object-cover h-6 w-6 rounded-full "/>
// //                 <div className='ml-2 flex items-center gap-x-2'>
// //                     <p className='text-sm font-medium text-gray-900'>HAJIDALAKHTAR</p>
// //
// //                     <p className='max-h-40 truncate text-xs text-zinc-500'>
// //                         {/*{formatTimeToNow(new Date(comment.createdAt))}*/}
// //                     </p>
// //                 </div>
// //             </div>
// //
// //             <p className='text-sm text-zinc-900 mt-2'>asdasd</p>
// //
// //             <div className='flex gap-2 items-center'>
// //                 {/*<CommentVotes*/}
// //                 {/*    commentId={comment.id}*/}
// //                 {/*    votesAmt={votesAmt}*/}
// //                 {/*    currentVote={currentVote}*/}
// //                 {/*/>*/}
// //                 <div className='flex gap-1'>
// //                     {/* upvote */}
// //                     <button
// //                         // onClick={() => vote('UP')}
// //                         // size='xs'
// //                         // variant='ghost'
// //                         // aria-label='upvote'
// //                         //
// //                     >
// //                         {/*<ArrowBigUp*/}
// //                         {/*    className={cn('h-5 w-5 text-zinc-700', {*/}
// //                         {/*        'text-emerald-500 fill-emerald-500': currentVote?.type === 'UP',*/}
// //                         {/*    })}*/}
// //                         {/*/>*/}
// //                         s
// //                     </button>
// //
// //                     {/* score */}
// //                     <p className='text-center py-2 px-1 font-medium text-xs text-zinc-900'>
// //                         {/*{votesAmt}*/}a
// //                     </p>
// //
// //                     {/* downvote */}
// //                     <button
// //                         // onClick={() => vote('DOWN')}
// //                         // size='xs'
// //                         // className={cn({
// //                         //     'text-emerald-500': currentVote?.type === 'DOWN',
// //                         // })}
// //                         // variant='ghost'
// //                         // aria-label='upvote'
// //                         //
// //                     >
// //                         {/*<ArrowBigDown*/}
// //                         {/*    className={cn('h-5 w-5 text-zinc-700', {*/}
// //                         {/*        'text-red-500 fill-red-500': currentVote?.type === 'DOWN',*/}
// //                         {/*    })}*/}
// //                         {/*/>*/}
// //                     </button>
// //                 </div>
// //
// //                 <button
// //                     // onClick={() => {
// //                     //     if (!session) return router.push('/sign-in')
// //                     //     setIsReplying(true)
// //                     // }}
// //                     // variant='ghost'
// //                     // size='xs'
// //                 >
// //                     {/*<MessageSquare className='h-4 w-4 mr-1.5' />*/}
// //                     Reply
// //                 </button>
// //             </div>
// //
// //             <div className='grid w-full gap-1.5'>
// //                 {/*<Label htmlFor='comment'>Your comment</Label>*/}
// //                 <div className='mt-2'>
// //                     {/*<Textarea*/}
// //                     {/*    onFocus={(e) =>*/}
// //                     {/*        e.currentTarget.setSelectionRange(*/}
// //                     {/*            e.currentTarget.value.length,*/}
// //                     {/*            e.currentTarget.value.length*/}
// //                     {/*        )*/}
// //                     {/*    }*/}
// //                     {/*    autoFocus*/}
// //                     {/*    id='comment'*/}
// //                     {/*    value={input}*/}
// //                     {/*    onChange={(e) => setInput(e.target.value)}*/}
// //                     {/*    rows={1}*/}
// //                     {/*    placeholder='What are your thoughts?'*/}
// //                     {/*/>*/}
// //                     <input/>
// //
// //                     <div className='mt-2 flex justify-end gap-2'>
// //                         <button
// //                             // tabIndex={-1}
// //                             // variant='subtle'
// //                             // onClick={() => setIsReplying(false)}
// //                         >
// //                             Cancel
// //                         </button>
// //                         <button
// //                             // isLoading={isLoading}
// //                             // onClick={() => {
// //                             //     if (!input) return
// //                             //     postComment({
// //                             //         postId,
// //                             //         text: input,
// //                             //         replyToId: comment.replyToId ?? comment.id, // default to top-level comment
// //                             //     })
// //                             // }}
// //                             //
// //                         >
// //                             Post
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //     {/*{question.answers.map((answer) => {*/}
// //     {/*    return (*/}
// //     {/*        <div className="mt-1">*/}
// //     {/*            <div className="flex w-full justify-between ">*/}
// //
// //     {/*                <div className="p-3">*/}
// //     {/*                    <div className="flex gap-3 items-center">*/}
// //     {/*                        <img*/}
// //     {/*                            src={"https://api.dicebear.com/6.x/lorelei/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=" + answer.user.name}*/}
// //     {/*                            className="object-cover w-7 h-7 rounded-full "/>*/}
// //     {/*                        <h3 className="font-bold">*/}
// //     {/*                            {answer.user.name}*/}
// //
// //     {/*                        </h3>*/}
// //     {/*                        /!*<span*!/*/}
// //     {/*                        /!*    className="text-xs text-gray-400 font-normal">{moment(answer.created_at).fromNow()}</span>*!/*/}
// //     {/*                    </div>*/}
// //     {/*                    <p className="text-lg mt-2">*/}
// //     {/*                        <div dangerouslySetInnerHTML={{__html: answer.answer}}/>*/}
// //     {/*                    </p>*/}
// //     {/*                    <button className="text-right text-blue-500">Reply</button>*/}
// //     {/*                </div>*/}
// //
// //
// //     {/*                /!*<div className="flex flex-col items-end gap-3 pr-3 py-3">*!/*/}
// //     {/*                /!*    <div>*!/*/}
// //     {/*                /!*        <svg className="w-6 h-6 text-gray-600"*!/*/}
// //     {/*                /!*             xmlns="http://www.w3.org/2000/svg"*!/*/}
// //     {/*                /!*             fill="none"*!/*/}
// //     {/*                /!*             viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">*!/*/}
// //     {/*                /!*            <path stroke-linecap="round" stroke-linejoin="round"*!/*/}
// //     {/*                /!*                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>*!/*/}
// //     {/*                /!*        </svg>*!/*/}
// //     {/*                /!*    </div>*!/*/}
// //     {/*                /!*    <div>*!/*/}
// //     {/*                /!*        <svg className="w-6 h-6 text-gray-600"*!/*/}
// //     {/*                /!*             xmlns="http://www.w3.org/2000/svg"*!/*/}
// //     {/*                /!*             fill="none"*!/*/}
// //     {/*                /!*             viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">*!/*/}
// //     {/*                /!*            <path stroke-linecap="round" stroke-linejoin="round"*!/*/}
// //     {/*                /!*                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>*!/*/}
// //     {/*                /!*        </svg>*!/*/}
// //     {/*                /!*    </div>*!/*/}
// //     {/*                /!*</div>*!/*/}
// //
// //     {/*            </div>*/}
// //
// //     {/*        </div>*/}
// //     {/*    );*/}
// //     {/*})}*/}
// //
// //     {/*</div>*/}
// //
// // </div>
