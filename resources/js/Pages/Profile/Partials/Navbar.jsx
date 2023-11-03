import { Link } from "@inertiajs/react";
import { BsBagFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="mx-6 lg:mx-6">
            <div className="w-full h-[50px] text-black flex justify-between items-center">
                <div className="">
                    <h1 className=" font-Dancing text-base bar-5:text-2xl transition-width duration-500 ease-in-out">BAYUSHOP</h1>
                </div>
                <div className=" hidden md:block">
                    <ul className="flex space-x-5 font-Heebo">
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>Invoice</li>
                        </a>
                        <a href="#">
                            <li>Blog</li>
                        </a>
                        <a href="#">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
                <div className="flex space-x-2 items-center">
                    <a href="#" className="font-Heebo">
                        SignIn
                    </a>
                    <BsBagFill />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
