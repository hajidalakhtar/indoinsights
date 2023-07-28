import DetailLayout from "@/Layouts/DetailLayout.jsx";
import React, {Fragment, useState} from "react";
import {Dialog, Transition} from '@headlessui/react'
import {CardQuestion, CreateWidgetCard, TipsCard} from "@/Components/Molecules/index.jsx";
import {router} from "@inertiajs/react";
import Select from "react-select";

export default function Index({auth, questions, rooms}) {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleButtonClick = () => {
        setIsOpen(true);
    };

    return (
        <DetailLayout
            auth={auth}
        >
            <div className="w-full">
                <h1 className="text-3xl font-black">Tanyakan </h1>
                <div className="grid grid-cols-12 gap-6 mt-4">
                    <div className="col-span-8">
                        <div>
                            {questions.map((question) => {
                                return (
                                    <div className="my-2">
                                        <CardQuestion user={question.user}
                                                      question={question}
                                                      auth={auth}/>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                    <div className="col-span-4 mt-2">
                        <CreateWidgetCard icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className=" h-10 w-10 mr-2.5 ml-1 text-orange fill-current bi bi-pencil-square"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
                                <path
                                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
                            </svg>
                        }

                                          // button={<button  onClick={setIsOpen(true)} className="w-full bg-blue-500 text-md text-white font-black rounded-full  py-1.5 ml-auto "> Tanya </button>}

                                          button={
                                              <button
                                                  onClick={handleButtonClick}
                                                  className="w-full bg-blue-500 text-md text-white font-black rounded-full py-1.5 ml-auto"
                                              >
                                                  Tanya
                                              </button>
                                          }

                                          description={"Tanyakan sesuatu kepada pengajar atau teman-temanmu"}
                                          title={"Tanyakan Sesuatu"}/>


                        <CreateQuestionModal isOpen={isOpen} rooms={rooms} closeModal={closeModal}
                                             user_id={auth.user.id}/>

                        <TipsCard title={"Tips Bertanya"}>
                            <ol className="list-decimal text-md ml-4 mt-3">
                                <li>Pastikan pertanyaan belum pernah ditanyakan sebelumnya.</li>
                                <li>Pastikan pertanyaan belum pernah ditanyakan sebelumnya.</li>
                                <li>Gunakan bahasa sopan dan jelas.</li>
                                <li>Berikan judul yang sesuai dan lengkap.</li>
                                <li>Jangan merasa tersinggung jika jawaban tidak memuaskan.</li>
                            </ol>

                        </TipsCard>


                    </div>

                </div>
            </div>


        </DetailLayout>
    )
        ;
}


function CreateQuestionModal({isOpen, closeModal, rooms, user_id}) {
    const [values, setValues] = useState({
        user_id: user_id,
        question: '',
        room_id: '',
    })

    const roomOptions = rooms.map(room => ({
        value: room.id,
        label: room.name
    }));

    function handleChangeInput(key, value) {
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }


    function handleChangeSelect(selectedOption) {
        handleChangeInput("room_id", selectedOption.value)
    };


    function handleSubmit(e) {
        router.post(route('question.store'), values)
    }


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Create Question
                                    answer </Dialog.Title>
                                <div className="mt-2">
                                    <label> Daerah </label>
                                    <Select
                                        placeholder={"Pilih Kota"}
                                        options={roomOptions}
                                        onChange={handleChangeSelect}

                                    />
                                    {/*<input className="w-full rounded-lg border h-10 border-gray-400"/>*/}
                                    <label>Question</label>
                                    <textarea onChange={(e) => handleChangeInput("question", e.target.value)}
                                              className="w-full border rounded-lg mt-2 border-gray-400 h-32"/>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )

}

