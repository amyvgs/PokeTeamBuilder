import { useEffect, useRef, useState } from "react";
import TableSection from "./TableSection";
import { Cancel, Check, Edit } from "@mui/icons-material";
import { purple, green, red } from '@mui/material/colors';

export default function Table(props) {
    const [teamName, setTeamName] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(true);

    // if in display mode, allow to edit name
    const [editName, setEditName] = useState(false);

    // helper function to set message and error
    const setUiMessage = (type, note) => {
        setIsError(type);
        setMessage(note);
    }

    // store user team if on build mode
    const storeTeam = () => {
        if (teamName === "") {
            setUiMessage(true, "Please Give Team a Name")
            return;
        }

        try {
            // set up for stringify and parse
            let allTeams = JSON.parse(localStorage.getItem("allTeams")) || [];
            let currTeam = { "name": teamName, "team": props.teamList };

            if (allTeams.length === 6) {
                setUiMessage(true, "You Already Have 6 Teams Stored. Delete one Before Adding Another");
                return;
            }

            allTeams.push(currTeam);

            // update local storage with new added team
            localStorage.setItem("allTeams", JSON.stringify(allTeams));

            // set message
            setUiMessage(false, "Team Created Successfully!")
            setTeamName("");

        } catch (err) {
            console.log(`Error in adding team: ${err}`);
            setUiMessage(true, "Issue With Adding Team")
        }
    }


    // update user team if on display mode
    const updateTeam = () => {
        try {
            // ensure valid props are given
            if (props.index === null || !props.name || !props.teamList) {
                setUiMessage(true, "All Proper Data Is Not Supplied To Complete Action")
            }

            // obtain all teams list
            let allTeams = JSON.parse(localStorage.getItem("allTeams"));

            // use the stored index to store updated team in proper spot
            allTeams[props.index] = { "name": props.teamName, "team": props.teamList };

            // store updated teams list into local storage again
            localStorage.setItem("allTeams", JSON.stringify(allTeams));

            // ui updates upon success
            setUiMessage(false, "Team Updated Successfully!")


        } catch (err) {
            console.log(err.message);
            setUiMessage(true, "Issue With Updating Team")
        }

    };


    let pokelist = [null, null, null, null, null, null];
    return (
        <div className="flex flex-col justify-end items-center w-3/5 table-lg:h-3/5 table-sm:h-full p-5 animate-fadeIn mt-20">
            <p className={`${isError ? "text-red-500" : "text-green-500"}`}>{message}</p>

            {props.display ?
                <div className="flex flex-row gap-5 w-full justify-center items-center mb-5">
                    {!editName ?
                        <>
                            <p className="font-PixelSans text-4xl text-white">{props.teamName}</p>
                            <Edit sx={{ color: purple[400] }} onClick={() => setEditName(true)} className="hover:cursor-pointer" />
                        </>
                        :
                        <>
                            <input className="w-full text-2xl text-white bg-transparent border-b focus:outline-none focus:ring-offset-0 focus:ring-0 focus:border-purple-400 focus:border-b-4 mb-5" type='text' value={props.teamName} onChange={(e) => props.setName(e.target.value)} />
                            <Check onClick={() => setEditName(false)} sx={{color: green[400]}} className="hover:cursor-pointer"/>
                        </>

                    }
                </div>
                :
                <div className="flex flex-row items-center justify-center w-full gap-10 mb-5">
                    <input className="w-full text-white bg-transparent border-b focus:outline-none focus:ring-offset-0 focus:ring-0 focus:border-purple-400 focus:border-b-4 mb-5" type='text' placeholder='Team Name' onChange={(e) => setTeamName(e.target.value)} value={teamName} />
                    <button className="bg-purple-500 text-white p-2 rounded-lg font-PixelSans hover:bg-purple-400">Randomize</button>
                </div>
            }

            <div className="grid table-lg:grid-cols-6 table-sm:h-1/2 table-sm:grid-cols-4 gap-4 w-full table-lg:h-full mb-10">
                {pokelist.map((element, index) => {
                    return <TableSection display={props.display} index={index} teamList={props.teamList} addPokemon={props.addPokemon} removePokemon={props.removePokemon} />
                })}

            </div>

            {props.display ?
                <button className="bg-gray-800 rounded-xl p-2 w-60 hover:shadow-lg hover:shadow-purple-800 font-PixelSans text-white" onClick={updateTeam}>Update Team</button>
                :
                <button className="bg-gray-800 table-sm:h-1/4 rounded-xl p-2 w-60 hover:shadow-lg hover:shadow-purple-800 font-PixelSans text-white" onClick={storeTeam}>Add Team</button>
            }
        </div>
    );
}