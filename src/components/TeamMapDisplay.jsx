import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import trash from "../assets/trash.png"

// amend logic to take advantage of stored pokemon image values

export default function TeamMapDisplay(props) {
    const [pokeImages, setPokeImages] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        getPokemonImages(props.team);
    }, [props.team])

    // create a function to obtain small images of each pokemon in team to display in map display
    const getPokemonImages = (list) => {
        let images = list.map((pokemon) => {
            return pokemon.front
        })

        setPokeImages([...images]);
    }

    // function for clicking on selection mode
    const modalBehavior = () => {
        props.handleAddition(props.teamName, props.team);
    }

    // function for clicking on display mode
    const displayBehavior = () => {
        localStorage.setItem("currTeam", JSON.stringify({ "name": props.teamName, "team": props.team, "index": props.index }));
        nav("/team-display");
    }

    // function that responds according to display setting
    const clickBehavior = () => {
        if(props.modal){
            modalBehavior();
        }
        else{
            displayBehavior();
        }
    }

    return (
        <div className="flex flex-row justify-center items-center w-full gap-5">
            <div className={`flex flex-row justify-between items-center rounded-3xl bg-slate-800 text-white h-20 ${props.modal ? "w-full" : "w-2/5"} p-5 hover:cursor-pointer hover:shadow-inner hover:shadow-purple-700`} onClick={clickBehavior}>
                <p className="text-purple-600 font-PixelSans text-xl col-span-2">{props.teamName}</p>
                <div className="flex flex-row">
                    {pokeImages.map((pokeImage, index) => {
                        return (<img key={index} className="max-h-10 max-w-10 table-lg:h-10 table-lg:w-10 table-sm:h-5 table-sm:w-5" src={pokeImage} />);
                    })}
                </div>

            </div>
            {props.modal || 
                <div className="hover:bg-slate-800 hover:cursor-pointer" onClick={() => props.updateUserTeams(props.index)}>
                    <img src={trash} width={25} height={35} />
                </div>
            }
        </div>
    );
}