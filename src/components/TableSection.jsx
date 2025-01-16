import { useEffect, useState } from "react";
import PokeInput from "./PokeInput";
import pokeball from "../assets/pokeball.png"
import pokeList from "../static/PokeList";
import typeImages from "../static/typeImages";
import AdvancedSearchModal from "./AdvancedSearchModal";
import { createPortal } from 'react-dom';
import PokemonCard from "./PokemonCard";


export default function TableSection(props) {

    const [displayInput, setDisplayInput] = useState(true);
    const [chosenPokemon, setChosenPokemon] = useState(null);
    const [showModal, setShowModal] = useState(false);


    // useEffect for initial team building
    useEffect(() => {
        if (props.display && props.teamList[props.index] !== undefined && props.teamList[props.index] !== null){
            setChosenPokemon(props.teamList[props.index]);
            setDisplayInput(false);
        }
        else if (props.display){
            setDisplayInput(true);
        }
    }, [(props.display && props.teamList)]);


    // behavior for clearing a chosen pokemon
    const clearChosenPokemon = () => {
        let pokeId = chosenPokemon.id

        props.removePokemon(pokeId);
        setDisplayInput(true);
        setChosenPokemon(null);
    }

    return (
        <>
            {showModal && createPortal(<AdvancedSearchModal index={props.index} display={props.display} addPokemon={props.addPokemon} setDisplayInput={setDisplayInput} setChosenPokemon={setChosenPokemon} setShowModal={setShowModal}/>, document.body)}

            {displayInput 
                ?
                <div className="flex flex-col justify-center items-center table-lg:h-52 table-sm:h-40 col-span-2 hover:shadow-md bg-gradient-to-br from-slate-700 to-slate-900 backdrop-blur-md rounded-lg p-5">
                    <div className="flex justify-center h-10">
                        <PokeInput display={props.display} index={props.index} teamList={props.teamList} setDisplayInput={setDisplayInput} addPokemon={props.addPokemon} setChosenPokemon={setChosenPokemon} pokeList={pokeList} />
                    </div>

                    <div className="w-full flex flex-col justify-center items-center h-30">
                        <img className="opacity-50" src={pokeball} width={100} height={100} />
                        <p className="text-purple-600 underline hover:cursor-pointer hover:text-purple-500" onClick={() => setShowModal(true)}>advanced search</p>
                    </div>
                </div>

                :
                <PokemonCard pokemonData={chosenPokemon} clearChosenPokemon={clearChosenPokemon}/>
            }
        </>
    );
}