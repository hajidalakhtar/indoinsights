import DetailLayout from "@/Layouts/DetailLayout.jsx";
import {Link} from "@inertiajs/react";
import React, {useRef} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Detail({auth}) {
    const swiperRef = useRef();

    return (

        <DetailLayout
            auth={auth}
        >
            <h1 className="text-4xl font-black">Monument Nasional</h1>
            <div className="flex mt-1.5">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Second star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <p className="pl-2"> Open Now . 12:00 AM - 11:59 PM</p></div>
            <div className="mt-7 grid grid-cols-10 gap-4">
                <div className="col-span-4">
                    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg ">
                        <h1 className="text-xl font-bold">Tentang</h1>
                        <p className="text-gray-500">Monumen Nasional (Monas) adalah monumen peringatan setinggi 132
                            meter </p>
                        <div>
                            <p>Suggest edits to improve what we show.</p>
                            <Link className="font-bold">Edit This page</Link>
                        </div>
                    </div>

                </div>
                <div className="col-span-6">
                    <div>

                        <Swiper
                            // spaceBetween={50}
                            // modules={[Navigation]}
                            // onBeforeInit={(swiper) => {
                            //     swiperRef.current = swiper;
                            // }}
                            // slidesPerView={1}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c3/d2/54/jakarta-amazing-tour.jpg?w=800&h=-1&s=1"/>

                            </SwiperSlide>

                            <SwiperSlide>
                                asdasd
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c3/d2/54/jakarta-amazing-tour.jpg?w=800&h=-1&s=1"/>

                            </SwiperSlide>


                        </Swiper>

                        {/*<div>*/}
                        {/*    <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>*/}
                        {/*    <button onClick={() => swiperRef.current?.slideNext()}>Next</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>


            <div className="mt-7 grid grid-cols-10 gap-4">
                <div className="col-span-3 space-y-4  border-dark mt-10">

                </div>
                <div className="col-span-7  space-y-4  border-dark mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                 src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                 alt=""/>
                        </div>
                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                            <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua.
                            </p>
                            <div className="mt-4 flex items-center">
                                <div className="flex -space-x-2 mr-2">
                                    <img className="rounded-full w-6 h-6 border border-white"
                                         src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                         alt=""/>
                                    <img className="rounded-full w-6 h-6 border border-white"
                                         src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"/>
                                </div>
                                <div className="text-sm text-gray-500 font-semibold">
                                    5 Replies
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                 src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                 alt=""/>
                        </div>
                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                            <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua.
                            </p>

                            <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>

                            <div className="space-y-4">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-3">
                                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                             src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                             alt=""/>
                                    </div>
                                    <div
                                        className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                        <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                        <p className="text-xs sm:text-sm">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-3">
                                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                             src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                             alt=""/>
                                    </div>
                                    <div
                                        className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                        <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                        <p className="text-xs sm:text-sm">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DetailLayout>


    )
}
