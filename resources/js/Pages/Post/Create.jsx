import DetailLayout from "@/Layouts/DetailLayout.jsx";
import React, {useEffect, useState} from "react";
import {Tab} from '@headlessui/react'
import TextInput from "@/Components/TextInput.jsx";
import Select from 'react-select'
import TextEditor from "@/Components/TextEditor.jsx";
import {router, usePage} from "@inertiajs/react";
import Uppy from '@uppy/core';
import {Dashboard} from '@uppy/react';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';


export default function Create({auth, csrf_token, rooms}) {
    const {errors} = usePage().props
    const [roomSelected, setRoomSelected] = useState(null)
    let [categories] = useState({
        Posting: <PostsForm csrf_token={csrf_token} roomSelected={roomSelected}/>,
        Image: <ImageForm accept={"image/*"} roomSelected={roomSelected}/>,
    })

    const handleChangeSelect = (selectedOption) => {
        setRoomSelected(selectedOption.value)
    };

    return (
        <DetailLayout
            auth={auth}
        >
            <div className="grid grid-cols-10 gap-4 h-screen ">
                <div className="col-span-7  ">
                    <h1 className="text-2xl font-bold mb-3">Create Post</h1>
                    {Object.keys(errors).length != 0 ?
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
                             role="alert">
                            <span className="block sm:inline">
                            <ul className={"list-disc pl-3"}>
                                {errors.title ? <li>{errors.title}</li> : ""}
                                {errors.content ? <li>{errors.content}</li> : ""}
                                {errors.room_id ? <li>{errors.room_id}</li> : ""}
                            </ul>
                        </span>
                        </div> : ""}
                    <div>
                        <div className="w-full mb-4">
                            <Select
                                onChange={handleChangeSelect}
                                classNamePrefix="select"
                                placeholder={"Pilih Kota"}
                                isSearchable={true}
                                name="Kota"
                                options={rooms}
                            />
                        </div>
                        <div className="bg-white border border-1 overflow-hidden shadow-sm sm:rounded-lg">
                            <Tab.Group>
                                <Tab.List className="space-x-1 rounded-xl  p-1 ">
                                    <nav aria-label="Tabs ">
                                        <ul className="flex text-center border-b border-gray-100 ">
                                            {Object.keys(categories).map((category) => (
                                                <li className="flex-1 ">
                                                    <Tab
                                                        className="relative block p-4 w-full"
                                                        key={category}
                                                        onClick={() => {
                                                            // handleChangeInput("category", category)
                                                        }}
                                                    >
                                                        {({selected}) => (
                                                            <div className="flex items-center justify-center gap-4">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-5 w-5 shrink-0 text-gray-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                                    />
                                                                </svg>

                                                                <span
                                                                    className="text-sm font-medium text-gray-900"> {category} </span>
                                                                {selected ?
                                                                    <span
                                                                        className=" absolute inset-x-0 -bottom-px h-px w-full h-0.5 bg-blue-300"
                                                                    ></span>
                                                                    : ""}
                                                            </div>
                                                        )}
                                                    </Tab>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </Tab.List>
                                <Tab.Panels className="p-6 text-gray-900">
                                    <Tab.Panel
                                        className={(
                                            'rounded-xl bg-white p-3',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <PostsForm csrf_token={csrf_token} roomSelected={roomSelected}/>
                                    </Tab.Panel>
                                    <Tab.Panel
                                        className={(
                                            'rounded-xl bg-white p-3',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <ImageForm accept={"image/*"} roomSelected={roomSelected}/>
                                    </Tab.Panel>
                                    <Tab.Panel
                                        className={(
                                            'rounded-xl bg-white p-3',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <PostsForm csrf_token={csrf_token} roomSelected={roomSelected}/>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div
                        className=" mt-10 p-3 mb-3  bg-white rounded-lg border border-gray-200 "
                        rel="noreferrer">
                        <div className=" inline-flex mb-3">
                            <div className={'inline-flex w-52  rounded-full '} role="alert">
                                <p className="font-semibold text-md">Cara posting</p>
                                <img
                                    src="https://img.icons8.com/color/48/downtown.png"
                                    className="w-6 ml-1"
                                    alt="Tranding"
                                />
                            </div>
                        </div>
                        <ul>
                            <li>1. Gunakan Bahasa yang Sopan dan Tepat:</li>
                            <li>2. Jelaskan Pertanyaan atau Topik dengan Jelas:</li>
                            <li>3. Hindari Menulis dengan Ngasal:</li>
                            <li>4. Pertimbangkan Konteks dan Relevansi:</li>
                            <li>5. Gunakan Ejaan dan Tata Bahasa yang Benar:</li>
                            <li>6. Gunakan Paragraf yang Teratur:</li>
                            <li>7. Berikan Informasi Tambahan (jika perlu):</li>
                            <li>8. Gunakan Tanda Baca dengan Benar:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DetailLayout>
    );
}


function PostsForm({csrf_token, roomSelected}) {
    const [values, setValues] = useState(
        {
            "category": "Posting",
        }
    )

    function handleChangeInput(key, value) {
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }


    useEffect(() => {
        handleChangeInput("room_id", roomSelected);
    }, [roomSelected]);

    function submit(e) {
        e.preventDefault()
        router.post(route('posts.store', values))
    }

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <>
            <TextInput className="w-full" placeholder={"Title"}
                       onChange={(e) => handleChangeInput("title", e.target.value)}/>

            {/*<Select*/}
            {/*    className="mt-4"*/}
            {/*    classNamePrefix="select"*/}
            {/*    placeholder={"Pilih Kota"}*/}
            {/*    // isLoading={false}*/}
            {/*    // isClearable={true}*/}
            {/*    isSearchable={true}*/}
            {/*    menuPortalTarget={document.body}*/}
            {/*    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}*/}
            {/*    name="Kota"*/}
            {/*    options={options}*/}
            {/*/>*/}

            <div className="mt-4 rounded-lg">
                <TextEditor csrf_token={csrf_token} handleChangeInput={handleChangeInput}
                            toolbar={['bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo']}
                            formKey={"body"}/>

            </div>

            <TextInput className="w-full mt-4" placeholder={"Tag"}
                       onChange={(e) => handleChangeInput("tags", e.target.value)}/>
            <div className="flex justify-end">
                <button onClick={submit}
                        className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
                </button>
            </div>
        </>
    )
}


function ImageForm({accept, roomSelected}) {

    const [title, setTitle] = useState('');
    const uploadFiles = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('postImage', uppy.getFiles()[0].data);
        formData.append('category', 'Image');
        formData.append('title', title);
        formData.append('room_id', roomSelected);


        router.post(route('posts.store'), formData)

    };

    const uppy = new Uppy({
        restrictions: {
            allowedFileTypes: ['.jpg', '.jpeg', '.png', '.gif'],
            maxFileSize: 5 * 1024 * 1024, // 5 MB
            maxNumberOfFiles: 1

        },


    })


    return (
        <section className="container">

            <form onSubmit={uploadFiles}>
                <TextInput type="text" name="title" onChange={(e) => setTitle(e.target.value)} className={"w-full mb-4"}
                           placeholder={"Title"}/>
                <Dashboard name={"file"} uppy={uppy}
                           hideUploadButton={true}

                />
                <div className="flex justify-end">


                    <button
                        className={" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}
                        type="submit">Submit
                    </button>
                </div>

            </form>
        </section>
    );
}
