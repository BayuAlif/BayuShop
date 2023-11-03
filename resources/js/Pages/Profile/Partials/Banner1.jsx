import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";

const Banner1 = () => {
    return (
        <div className="w-full h-[350px] flex">
            <div className=" w-[42%]">
                <img className="h-full " src="/image/banner1.png" alt="" />
            </div>
            <div className="bg-Background_banner w-[58%] flex justify-start items-center">
                <div className="p-14">
                    <h3 className="text-gray-300 font-Heebo">LAST CALL!!</h3>
                    <h1 className=" text-5xl text-white font-semi-bold">
                        45% off ony this weak and get  <br />
                        special gift from us
                    </h1>
                    <div className="mt-7">
                        <button className="bg-white w-[100px] h-[40px] rounded-md outline-none">
                            Order Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;
