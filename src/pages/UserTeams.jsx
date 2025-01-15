import { useState } from "react";
import Header from "../components/Header";
import TeamMapDisplay from "../components/TeamMapDisplay";
import { useNavigate } from "react-router-dom";

export default function UserTeams() {
    const [userTeams, setUserTeams] = useState(JSON.parse(localStorage.getItem("allTeams")) || []);
    const nav = useNavigate();

    // change name to delete user team 
    const updateUserTeams = (delIndex) => {
        let newArr = userTeams.filter((team, index) => {
            return index !== delIndex;
        });

        localStorage.setItem("allTeams", JSON.stringify(newArr));

        let allTeams = JSON.parse(localStorage.getItem("allTeams"))
        setUserTeams([...allTeams]);
    }

    const navigateCreate = () => {
        nav("/");
    }


    return (
        <div className='h-screen w-screen overflow-y-hidden'>
            <Header />
            <div className="flex flex-col items-center justify-start h-screen w-full bg-gradient-to-r from-gray-600 to-gray-800">
                <h1 className="font-PixelSans text-5xl text-white mt-10">Your Saved Teams</h1>  
                <div className="flex flex-col items-center justify-start mt-10 w-full h-full gap-3 ">
                    <div className="flex flex-col items-center justify-start w-3/4 h-4/5 bg-slate-800 bg-opacity-90 space-y-4 p-10 rounded-lg overflow-y-scroll shadow-2xl border-4 border-slate-900">
                        {userTeams === null || userTeams.length === 0 ?
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <h1 onClick={navigateCreate} className="font-PixelSans text-3xl text-white hover:text-purple-300 hover:cursor-pointer">Begin Creating Teams Now!</h1>
                            </div>
                            :
                            userTeams.map((element, index) => {
                                return <TeamMapDisplay key={index} index={index} teamName={element.name} team={element.team} updateUserTeams={updateUserTeams} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}