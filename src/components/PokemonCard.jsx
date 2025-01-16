import { useEffect, useState } from "react";
import trash from "../assets/trash.png";
import typeImages from "../static/typeImages";

const  PokemonCard = ({pokemonData , clearChosenPokemon})  =>  {
     // use state for pokemon view once displayed
    const [showBack, setShowBack] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);

    // shadow colors for each pokemon type 
    const pokeShadow = {
        "bug": "shadow-lime-600",
        "dark": "shadow-black/30",
        "dragon": "shadow-indigo-600",
        "electric": "shadow-amber-400",
        "fairy": "shadow-pink-500",
        "fighting": "shadow-orange-500",
        "fire": "shadow-red-600",
        "flying": "shadow-sky-400",
        "ghost": "shadow-violet-800",
        "grass": "shadow-green-700",
        "ground": "shadow-amber-800",
        "ice": "shadow-cyan-600",
        "normal": "shadow-gray-300",
        "poison": "shadow-purple-500",
        "psychic": "shadow-fuchsia-600",
        "rock": "shadow-yellow-600",
        "steel": "shadow-slate-400",
        "water": "shadow-blue-600"
    };

    // obtaining image of types for each pokemon
    const getTypeImage = (typeName) => typeImages[typeName];

    // useEffect to load until all information is loaded
    useEffect(() => {
        if(pokemonData){
            const img = new Image();
            img.src = pokemonData.front
            img.onload = () => {
                setPokemon(pokemonData);
                setLoading(false);
            };
        }
    }, [pokemonData]);


    return (
        loading ? 
        <div className="flex flex-col justify-center items-center table-lg:h-52 table-sm:h-40 col-span-2 text-white font-PixelSans bg-gradient-to-br from-slate-700 to-slate-900 backdrop-blur-md rounded-lg p-5">
            <h1>Loading...</h1>
        </div>

        :
        <div className={`flex flex-col justify-center items-center table-lg:h-52 table-sm:h-40 col-span-2 font-PixelSans bg-gradient-to-br from-slate-700 to-slate-900 backdrop-blur-md rounded-lg p-5 shadow-lg ${pokeShadow[pokemon.types[0]]}`}>
            <div className=" animate-fadeIn flex flex-row justify-center items-center space-x-3 h-5">
                <h1 title={pokemon.name} className={`${pokemon.name.length > 20 ? `text-lg` : 'text-2xl'} line-clamp-1 text-white`}>{pokemon.name}</h1>

                <div onClick={clearChosenPokemon} className="flex justify-center items-center text-red-800 hover:cursor-pointer hover:bg-black/60 rounded-lg">
                    <img src={trash} height={25} width={25} />
                </div>
            </div>

            <div className={`animate-fadeIn h-40 flex flex-col justify-center items-center `}>
                <img onClick={() => setShowBack(!showBack)} src={(showBack && pokemon.back != null) ? pokemon.back : pokemon.front} className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-110" width={130} height={130} />

                <div className="flex flex-row w-full justify-center items-center space-x-3">
                    {pokemon.types.map((type, index) => {
                        return <img key={index} src={getTypeImage(type)} height={80} width={80} />
                    })}
                </div>
            </div>
        </div>

    );
}

export default PokemonCard;