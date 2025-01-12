import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import pokeList from '../static/PokeList';


export default function PokeInput(props) {
    const [showList, setShowList] = useState(false);
    const [filteredPokemon, setFilteredPokemon] = useState(pokeList)

    // use ref for mointoring outside clicks
    const inputContainerRef = useRef(null);


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputContainerRef.current && !inputContainerRef.current.contains(event.target)) {
                setShowList(false);
                setFilteredPokemon(pokeList);
            }
        };

        // event listener
        document.addEventListener("mousedown", handleOutsideClick);

        // clean event listner
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        };
    }, []);


    const handleInputChange = (e) => {
        setFilteredPokemon(
            pokeList.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        );
    }

    const handlePokemonChoice = async (pokemonUrl) => {
        try {
            // obtain pokemon info using pokemon url
            const res = await axios.get(pokemonUrl);
            const resRef = res.data;

            console.log(resRef.types)

            const typeNames = resRef.types.map((type) => {
                return type.type.name;
            })

            // construct pokemon object for parent to display, pass with callback
            const pokemon = {
                name: resRef.name.charAt(0).toUpperCase() + resRef.name.slice(1),
                front: resRef.sprites.front_default,
                back: resRef.sprites.back_default,
                types: typeNames,
                id: Date.now()
            };


            props.setChosenPokemon(pokemon);
            props.display ? props.addPokemon(pokemon, props.index) : props.addPokemon(pokemon);

            props.setDisplayInput(false);

            // ui updates upon success
            setShowList(false);
            
        } catch (err) {
            console.error(err);
        }
    }


    return (

        <div ref={inputContainerRef} className='relative'>
            <input onFocus={() => setShowList(true)} className="text-white bg-transparent border-b focus:outline-none focus:ring-offset-0 focus:ring-0 focus:border-purple-400 focus:border-b-10" type='text' placeholder='Choose a Pokemon' onChange={handleInputChange} />
            {showList && <ul className='bg-slate-900 text-white h-28 w-full absolute overflow-scroll z-10'>
                {filteredPokemon.map(pokemon => (
                    <li onClick={() => handlePokemonChoice(pokemon.url)} className='hover:bg-black hover:cursor-pointer p-2'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                ))}
            </ul>}
        </div>

    );
}