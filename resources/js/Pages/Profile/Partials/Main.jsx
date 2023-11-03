import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import Banner1 from "./Banner1";

const Main = () => {
    return (
        <div className="p-6 m-auto">
            <div>
                <h1 className="font-Heebo text-base bar-5:text-2xl transition-width duration-500 ease-in-out">
                    BRANDS
                </h1>
            </div>
            <div className=" mt-5 pb-0 w-full mb-0 bar-6:grid-cols-2 grid bar-1:grid-cols-6 lg:grid-cols-6  bar-5:grid-cols-3 gap-5 transition ease-in duration-500">
                <a href="#">
                    <div className="shadow-md">
                        <img
                            className="w-full h-full "
                            src="/image/3.png"
                            alt=""
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="shadow-md">
                        <img
                            className="w-full h-full"
                            src="/image/4.png"
                            alt=""
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="shadow-md">
                        <img
                            className="w-full h-full"
                            src="/image/5.png"
                            alt=""
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="shadow-md">
                        <img
                            className="w-full h-full"
                            src="/image/6.png"
                            alt=""
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="  shadow-md">
                        <img
                            className="w-full h-full"
                            src="/image/7.png"
                            alt=""
                        />
                    </div>
                </a>
                <a href="#">
                    <div className=" shadow-md">
                        <img
                            className="w-full h-full"
                            src="/image/8.png"
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-52">
                <div className="w-full mx-auto p-6 rounded-lg shadow-lg bg-white">
                    <img
                        src="https://wallpapercave.com/wp/wp9628059.jpg"
                        alt="Toko Gambar"
                        className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold">Nama Toko</h2>
                        <p className="text-gray-600">Deskripsi toko singkat.</p>
                        <div className="mt-2">
                            <span className="text-green-500 font-semibold">
                                $99.99
                            </span>
                            <span className="text-gray-600 ml-2 line-through">
                                $129.99
                            </span>
                        </div>
                    </div>
                    <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                        Beli Sekarang
                    </button>
                </div>
            </div>
            <div className="mt-24">
                <Banner1 />
            </div>
        </div>
    );
};

export default Main;
