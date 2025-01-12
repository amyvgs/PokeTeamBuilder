import { useEffect, useState } from "react";
import Header from "../components/Header";
import TeamMapDisplay from "../components/TeamMapDisplay";

export default function UserTeams() {
    const [userTeams, setUserTeams] = useState(JSON.parse(localStorage.getItem("allTeams")) || []);

    // change name to delete user team 
    const updateUserTeams = (delIndex) => {
        let newArr = userTeams.filter((team, index) => {
            return index !== delIndex;
        });

        localStorage.setItem("allTeams", JSON.stringify(newArr));

        let allTeams = JSON.parse(localStorage.getItem("allTeams"))
        setUserTeams([...allTeams]);
    } 


    return (
        <div className='h-screen w-screen overflow-y-hidden'>
            <Header />
            <div className="flex flex-col items-center justify-start h-screen w-full bg-gradient-to-r from-gray-600 to-gray-800">
                <h1 className="font-PixelSans text-5xl text-white mt-10">Your Saved Teams</h1>

                {userTeams === null || userTeams.length === 0 ?
                    <div className="flex flex-col justify-center items-center mb-10 h-full w-full">
                        <h1 className="font-PixelSans text-3xl text-white hover:text-purple-300 hover:cursor-pointer">Begin Creating Teams Now!</h1>
                    </div> 
                    :
                    <div className="flex flex-col w-full h-full gap-3 mt-10">
                        {userTeams.map((element, index) => {
                            return <TeamMapDisplay key={index} index={index} teamName={element.name} team={element.team} updateUserTeams={updateUserTeams} />
                        })}
                    </div>
                }
            </div>
        </div>
    );
}