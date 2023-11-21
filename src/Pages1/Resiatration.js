import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { db, storage } from '../firebase'
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function Resiatration() {

    const [file, setfile] = useState(null)
    const handleSelectFile = (e) => {
        if (e.target.files[0]) {
            setfile(e.target.files[0])
        }
    }
    console.log(file);

    // const handleCreatePost = () => {
    //     if (postText || picture) {

    //         if (picture) {
    //             const storageRef = ref(storage, `post/${randomKey}.jpg`);
    //             var uploadTask = uploadBytesResumable(storageRef, picture);

    //             uploadTask.on(
    //                 "state_changed",
    //                 //Monitor the upload
    //                 (snapshot) => {
    //                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    //                     setuploadprogress(progress)
    //                 },

    //                 //error
    //                 (error) => {
    //                     console.log(error);
    //                 },

    //                 () => {
    //                     // Handle successful uploads on complete

    //                     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //                     getDownloadURL(uploadTask.snapshot.ref)
    //                         .then((downloadURL) => {

    //                             addDoc(collection(db, "POSTS"), {
    //                                 POST_TEXT: postText,
    //                                 POST_IMAGE: downloadURL,
    //                                 POST_TIMESTAMP: serverTimestamp()
    //                             }).then(() => {
    //                                 setpostText(" ")
    //                                 setuploadprogress(0)
    //                                 var a = Array.from(
    //                                     Array(20),
    //                                     () => Math.floor(Math.random() * 36).toString(36)
    //                                 ).join('');
    //                                 setrandomKey(a)
    //                             }).catch(err => console.log(err))

    //                         });
    //                 }
    //             )

    //         } else {

    //             addDoc(collection(db, "POSTS"), {
    //                 POST_TEXT: postText,
    //                 POST_IMAGE: "",
    //                 POST_TIMESTAMP: serverTimestamp
    //             })
    //                 .then(() => {
    //                     setpostText("")
    //                 })
    //                 .catch(err => console.log(err))

    //         }


    //     }
    // }

    const letsTalk = () => {
        if (file) {
            // 1. add file to the database
            // 2. link will get generated
            // addDoc(path, {
            // fileLink : generatedFileLink
            // fName :
            // LName :
            // email : 

            // })
        } else {
            if (file) {
                // show error message
            }
        }
    }

    return (

        <div className="isolate bg-white px-6 py-20 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <Link to='/registration'>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Resiatration Form
                    </h2>
                </Link>
            </div>
            <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="block w-full m-2 rounded-md border-0 px-14 py-14 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <div className='m-3'>
                        <label
                            htmlFor="full-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Full name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 m-3">

                        <label
                            htmlFor="resume"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >

                        </label>

                        <div className="mt-2.5 bg-inherit rounded-xl ">
                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Upload Resume</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" accept="application/pdf" className="sr-only" onChange={handleSelectFile} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PDF file only, up to 10MB</p>
                                        <p className="text-xs leading-5 text-gray-600">{file ? "Resume Selected : " + file?.name : "No Resume Selected"}</p>
                                    </div>
                                </div>
                            </div>

                            {/* <button className="rounded-full m-2 border placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white text-bold bg-indigo-900 px-5 py-2 hover:bg-indigo-700 hover:cursor-pointer" type="button">Upload Resume</button> */}

                            {/* <input
                                type="file"
                                name="resume"
                                id="resume"
                                accept="application/pdf"
                                onChange={handleSelectFile}
                            /> */}

                        </div>
                    </div>
                    <div className="sm:col-span-2 m-3">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2 m-3">
                        <label
                            htmlFor="phone-number"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Phone number
                        </label>
                        <div className="relative mt-2.5">

                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="discription"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Discription
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="discription"
                                id="discription"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                </div >
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form >
        </div >

    )
}

export default Resiatration