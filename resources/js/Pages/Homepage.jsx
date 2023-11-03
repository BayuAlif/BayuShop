import { Link, Head } from "@inertiajs/react";
import Navbar from "./Profile/Partials/Navbar";
import Slide from "./Slide";
import Main from "./Profile/Partials/Main";

export default function Homepage() {
    return (
        <body className=" m-0 p-0 bg-gray-200 ">
            <div className="bg-gray-200">
                <Navbar />
            </div>
            <div className="mt-5 flex justify-center ">
                <Slide />
            </div>
            <div className="mt-10">
                <Main />
            </div>
            <div className="mt-28">
                <h1>haiii</h1>
            </div>
        </body>
    );
}
