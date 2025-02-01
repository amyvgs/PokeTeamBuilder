import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import axios from "axios";
import pokeList from "../static/PokeList";

export default function AdvancedSearchModal(props) {
  // initial pokemon list
  const [resultList, setResultList] = useState([]);

  // preloaded types
  const [allTypes, setAllTypes] = useState({});

  // user requested pokemon characteristics
  const [requestedTypes, setRequestedTypes] = useState([]);
  const [requestedGeneration, setRequestedGeneration] = useState([]);
  const [requestedColor, setRequestedColor] = useState([]);

  // loading filter results
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to preload type values to store
  useEffect(() => {
    let types = [
      "bug",
      "dark",
      "dragon",
      "electric",
      "fairy",
      "fighting",
      "fire",
      "flying",
      "ghost",
      "grass",
      "ground",
      "ice",
      "normal",
      "poison",
      "psychic",
      "rock",
      "steel",
      "water",
    ];

    const fetchAllPokemonTypes = async () => {
      for (const type in types) {
        let finalList = [];
        let curr = types[type];

        let res = await axios.get(`https://pokeapi.co/api/v2/type/${curr}/`);
        let resPokemon = res.data.pokemon;

        resPokemon.forEach((pokemon) => {
          finalList.push(pokemon.pokemon.name);
        });

        setAllTypes((prev) => ({ ...prev, [curr]: finalList }));
      }
    };

    fetchAllPokemonTypes();
  }, []);

  useEffect(() => {
    const updateResults = async () => {
      // all pokemon to filter
      let allPokemon = pokeList;

      // create a list to temporarily store updated queries
      const typeResults = [];
      let genResults = [];
      let colorResults = [];

      // reset result list
      setResultList([]);

      // update list for any potential user types selected
      requestedTypes.forEach((element) => {
        typeResults.push(...allTypes[element]);
      });

      // obtain list for any potential user gens selected
      for (const item in requestedGeneration) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/generation/${requestedGeneration[item]}/`
        );
        const genPokemon = res.data.pokemon_species;

        genPokemon.forEach((element) => {
          genResults.push(element.name.toLowerCase());
        });
      }

      for (const item in requestedColor) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-color/${requestedColor[item]}/`
        );
        let colorPokemon = res.data.pokemon_species;

        colorPokemon.forEach((element) => {
          colorResults.push(element.name.toLowerCase());
        });
      }

      if (typeResults.length > 0) {
        allPokemon = allPokemon.filter((element) => {
          return typeResults.includes(element.name);
        });
      }

      if (genResults.length > 0) {
        allPokemon = allPokemon.filter((element) => {
          return genResults.includes(element.name);
        });
      }

      if (colorResults.length > 0) {
        allPokemon = allPokemon.filter((element) => {
          return colorResults.includes(element.name);
        });
      }

      if (
        colorResults.length === 0 &&
        genResults.length === 0 &&
        typeResults.length === 0
      ) {
        setResultList([]);
      } else {
        setResultList([...allPokemon]);
      }
    };

    updateResults();
  }, [requestedTypes, requestedGeneration, requestedColor]);

  const handlePokemonChoice = async (pokemonUrl) => {
    try {
      // obtain pokemon info using pokemon url
      const res = await axios.get(pokemonUrl);
      const resRef = res.data;

      const typeNames = resRef.types.map((type) => {
        return type.type.name;
      });

      // construct pokemon object for parent to display, pass with callback
      const pokemon = {
        name: resRef.name.charAt(0).toUpperCase() + resRef.name.slice(1),
        front: resRef.sprites.front_default,
        back: resRef.sprites.back_default,
        types: typeNames,
        id: Date.now(),
      };

      props.setChosenPokemon(pokemon);
      props.display
        ? props.addPokemon(pokemon, props.index)
        : props.addPokemon(pokemon);

      props.setDisplayInput(false);

      // ui updates upon success
      props.setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  // values for accordion display
  const accordionDisplay = [
    {
      title: "Type",
      content: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water",
      ],
      list: requestedTypes,
      updateList: setRequestedTypes,
    },
    {
      title: "Generation",
      content: [
        { name: "Gen 1", value: "generation-i" },
        { name: "Gen 2", value: "generation-ii" },
        { name: "Gen 3", value: "generation-iii" },
        { name: "Gen 4", value: "generation-iv" },
        { name: "Gen 5", value: "generation-v" },
        { name: "Gen 6", value: "generation-vi" },
        { name: "Gen 7", value: "generation-vii" },
        { name: "Gen 8", value: "generation-viii" },
        { name: "Gen 9", value: "generation-ix" },
      ],
      list: requestedGeneration,
      updateList: setRequestedGeneration,
    },
    {
      title: "Color",
      content: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Black",
        "Purple",
        "Gray",
        "White",
        "Pink",
      ],
      list: requestedColor,
      updateList: setRequestedColor,
    },
  ];

  return (
    <div
      onClick={() => props.setShowModal(false)}
      className="fixed flex items-center justify-center inset-0 bg-black/60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-slate-700 h-1/2 w-1/2 opacity-100 p-5 overflow-y-scroll rounded-lg shadow-lg shadow-black text-white"
      >
        <div className=" flex flex-row items-center justify-between mb-5 font-PixelSans">
          <h1 className="text-5xl">Advanced Search</h1>
          <p
            onClick={(e) => props.setShowModal(false)}
            className="text-3xl text-red-600 hover:font-bold hover:cursor-pointer hover:text-red-800"
          >
            X
          </p>
        </div>

        <div className="mb-10 ml-5">
          <h1 className="text-2xl text-purple-200">Search Characteristics</h1>
          <div className="flex flex-col justify-center items-center mt-2">
            {/* set up accordions for characteristics */}
            {accordionDisplay.map((element, index) => {
              return (
                <Accordion
                  key={index}
                  title={element["title"]}
                  content={element["content"]}
                  list={element["list"]}
                  updateList={element["updateList"]}
                />
              );
            })}
          </div>
        </div>

        <div className="mb-20 ml-5 space-y-5">
          <h1 className="text-2xl text-purple-200">Results</h1>
          {resultList.length === 0 ? (
            <p>Choose Your Filter Values Above!</p>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {resultList.map((element) => {
                return (
                  <div
                    key={element.name}
                    onClick={() => handlePokemonChoice(element.url)}
                    className="bg-slate-800 col-span-1 p-2 rounded-lg shadow-md shadow-black hover:shadow-purple-600 hover:cursor-pointer"
                  >
                    {element.name.charAt(0).toUpperCase() +
                      element.name.slice(1)}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
