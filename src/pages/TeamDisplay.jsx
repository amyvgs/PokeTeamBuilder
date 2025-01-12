import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import TeamAnalysis from "../components/TeamAnalysis";

export default function TeamDisplay(props) {

    // store current team values in useState

    const [name, setName] = useState("");
    const [team, setTeam] = useState([]);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        // obtain current team from local storage
        let currTeam = JSON.parse(localStorage.getItem("currTeam"));

        // store values for display
        setName(currTeam["name"] || "");
        setTeam(currTeam["team"] || []);
        setIndex(currTeam["index"]);

    }, [])


    // function to add pokemon to user Team 
    const addPokemon = (newPokemon, index) => {
        let teamCopy = team;
        teamCopy[index] = newPokemon;
        setTeam([...teamCopy]);
    }


    // function to remove pokemon from user team
    const removePokemon = (pokeId) => {
        let teamCopy = team;

        for(let i = 0; i < teamCopy.length; i++){
            let currPokemon = teamCopy[i];
            if(currPokemon === null){
                continue;
            }

            else if(currPokemon.id === pokeId){
                teamCopy[i] = null;
                break;
            }
        }
        console.log(teamCopy)
        setTeam([...teamCopy]);
    }


    return (
        <>
            <div className='h-screen w-screen overflow-y-hidden'>
                <Header />
                <div className="flex flex-row items-center h-full w-full bg-gradient-to-r from-gray-600 to-gray-800">
                    <Table display={true} teamList={team} index={index} teamName={name} setName={setName} addPokemon={addPokemon} removePokemon={removePokemon} />
                    <TeamAnalysis display={true} teamList={team} />
                </div>
            </div>
        </>
    );
}