import DetailLayout from "@/Layouts/DetailLayout.jsx";
import React, {useEffect, useState} from "react";
import {Tab} from '@headlessui/react'
import TextInput from "@/Components/TextInput.jsx";
import Select from 'react-select'
import TextEditor from "@/Components/TextEditor.jsx";
import {useDropzone} from 'react-dropzone'
import {router, usePage} from "@inertiajs/react";

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
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const uploadFiles = () => {
        const formData = new FormData();
        for (const file of uploadedFiles) {
            formData.append('postImage', file);
            formData.append('category', 'Image');
            formData.append('title', title);
            formData.append('room_id', roomSelected);
        }


        router.post(route('posts.store'), formData)

    };
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setUploadedFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        previewUrl: URL.createObjectURL(file)
                    })
                )
            );
        }
    });
    useEffect(() => {
        return () => {
            uploadedFiles.forEach(file => URL.revokeObjectURL(file.previewUrl));
        };
    }, [uploadedFiles]);

    const renderUploadedImages = () => {
        return uploadedFiles.map(file => (
            <div key={file.name}>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={file.previewUrl}
                    onLoad={() => {
                        URL.revokeObjectURL(file.previewUrl);
                    }}
                />
            </div>
        ));
    };
    return (
        <section className="container">
            <TextInput
                className="w-full"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div {...getRootProps({className: 'flex items-center justify-center w-full mt-4'})}>
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" {...getInputProps()} className="hidden"/>
                </label>
            </div>
            {uploadedFiles.length > 0 && (
                <React.Fragment>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">{renderUploadedImages()}</div>
                    <button onClick={uploadFiles}
                            className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
                    </button>
                </React.Fragment>
            )}
        </section>
    );
}
