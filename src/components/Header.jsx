import { Link } from "react-router-dom";
import drawer from "../assets/drawer.png";
import Drawer from "./Drawer";
import InfoButton from "./Info";
import { Info } from "@mui/icons-material";
import { useState } from "react";
import { createPortal } from 'react-dom';

export default function Header() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
        {isToggled && <InfoButton setIsToggled={setIsToggled}/>}
        <div className="flex justify-between h-20 items-center flex-row sticky top-0 bg-gray-800 p-4 border-solid border-4 border-gray-900 text-center w-screen z-20">
            <Drawer/>

            <div>
                <span className="text-5xl font-PixelSans text-white"><Link to="/">PokeTeamBuilder</Link></span>
            </div>

            <Info onClick={() => setIsToggled(true)} className="hover:cursor-pointer"/>
        </div>
        </>
    );
}