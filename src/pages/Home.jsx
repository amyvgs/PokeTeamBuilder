import Header from "../components/Header";
import Table from "../components/Table";
import TeamAnalysis from "../components/TeamAnalysis";
import { useState } from 'react'

export default function Home() {
    const [teamList, updateTeamList] = useState([]);

    // function to add to team list
    const addPokemon = (pokemon) => {
        updateTeamList([...teamList, pokemon]);
    }

    // function to remove to team list
    const removePokemon = (id) => {
        updateTeamList(teamList.filter((poke) => {
            return poke.id !== id;
        }));
    }

    return (
        <>
            <div className='table-lg:h-screen table-lg:w-screen table-sm:h-full table-sm:w-full table-lg:overflow-y-hidden z-20'>
                <Header />
                <div className="flex table-lg:flex-row table-sm:flex-col items-center justify-center h-full w-full bg-gradient-to-r from-gray-600 to-gray-800 gap-5">
                    <Table display={false} teamList={teamList} addPokemon={addPokemon} removePokemon={removePokemon} />
                    <TeamAnalysis teamList={teamList} />
                </div>
            </div>
        </>
    );
} 