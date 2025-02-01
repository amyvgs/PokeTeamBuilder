import { useState, useEffect } from "react";
import typeRelations from "../static/typerelations";

export default function useCreateAnalysis(team){
    // a map to display values and dynamically change them 
    const typings = {
        "bug": 0,
        "dark": 0,
        "dragon": 0,
        "electric": 0,
        "fairy": 0,
        "fighting": 0,
        "fire": 0,
        "flying": 0,
        "ghost": 0,
        "grass": 0,
        "ground": 0,
        "ice": 0,
        "normal": 0,
        "poison": 0,
        "psychic": 0,
        "rock": 0,
        "steel": 0,
        "water": 0
    }

    // typing object intializes the state object dedicated to storing analysis
    const [typingObject, updateTypingObject] = useState({ ...typings });


    // create useEffect that updates team analysis screen.
    useEffect(() => {
        const updateAnalysis = () => {
            // reinitialize state object to re-evaluate team upon change, wont cause rerender
            updateTypingObject(typings)
            const types = [];

            // for each pokemon in team list obtain their types and put within a list
            team.forEach(element => {
                if (element === null) {
                    return;
                }
                types.push(...element.types)
            });

            // using a series of forEach methods, being dealing with these values accordingly
            types.forEach(element => {
                let currType = typeRelations[element]

                currType["double_damage_from"].forEach(element => {
                    updateTypingObject(prev => ({ ...prev, [element]: (prev[element]) - 1 }));
                });

                currType["half_damage_from"].forEach(element => {
                    updateTypingObject(prev => ({ ...prev, [element]: (prev[element]) + 1 }));
                });

                if ("no_damage_from" in currType) {
                    currType["no_damage_from"].forEach(element => {
                        updateTypingObject(prev => ({ ...prev, [element]: (prev[element]) + 1.5 }));
                    });
                }
            });
        }

        updateAnalysis();
    }, [team]);

    return typingObject;

}
