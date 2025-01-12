import { useState } from "react";
import drawer from "../assets/drawer.png";
import { Link } from "react-router-dom";

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center  w-10 h-10  hover:bg-gray-600 hover:cursor-pointer rounded-md">
                <img src={drawer} width={30} height={30} />
            </div>


            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-gray-900 opacity-50 transform transition-transform ${isOpen ? " translate-x-0" : "-translate-x-full"}`}></div>
            <div className={`z-30 opacity-100 fixed top-0 left-0 h-screen w-64 bg-black text-white transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="p-4 space-y-5">
                    <div className="w-full font-PixelSans text-2xl hover:bg-purple-900 p-5 hover:cursor-pointer">
                        <Link to="/myteams">My Teams</Link>
                    </div>

                    <div className="w-full font-PixelSans text-2xl hover:bg-purple-900 p-5 hover:cursor-pointer">
                        <Link to="/compare">Compare</Link>
                    </div>

                    <div className="w-full rounded-xl bg-purple-500 p-5 font-PixelSans text-lg hover:bg-purple-400 hover:cursor-pointer">
                        <p>Clear Local Storage</p>
                    </div>

                </div>
            </div>
        </>

    );
}