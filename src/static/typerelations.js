// consider importance of the categories no_damage_from and no_damage_to
// there is some redundant information among categories, decide which ones to keep


const typeRelations = {
    "bug": {
        "double_damage_from": ["flying", "rock", "fire"],
        "half_damage_from": ["fighting", "ground", "grass"],
    },
    "dark": {
        "double_damage_from": ["fighting", "bug", "fairy"],
        "half_damage_from": ["ghost", "dark"],
        "no_damage_from": ["psychic"]
    },
    "dragon": {
        "double_damage_from": ["ice", "dragon", "fairy"],
        "half_damage_from": ["fire", "water", "grass", "electric"],
    },
    "electric": {
        "double_damage_from": ["ground"],
        "half_damage_from": ["flying", "steel", "electric"],
    },
    "fairy": {
        "double_damage_from": ["poison", "steel"],
        "half_damage_from": ["fighting", "bug", "dark"],
        "no_damage_from": ["dragon"]
    },
    "fighting": {
        "double_damage_from": ["flying", "psychic", "fairy"],
        "half_damage_from": ["rock", "bug", "dark"],
    },
    "fire": {
        "double_damage_from": ["ground", "rock", "water"],
        "half_damage_from": ["bug", "steel", "fire", "grass", "ice", "fairy"],
    },
    "flying": {
        "double_damage_from": ["rock", "electric", "ice"],
        "half_damage_from": ["fighting", "bug", "grass"],
        "no_damage_to": ["ground"]
    },
    "ghost": {
        "double_damage_from": ["ghost", "dark"],
        "half_damage_from": ["poison", "bug"],
        "no_damage_from": ["normal", "fighting"],
    },
    "grass": {
        "double_damage_from": ["flying", "poison", "bug", "fire", "ice"],
        "half_damage_from": ["ground", "water", "grass", "electric"],
    },
    "ground": {
        "double_damage_from": ["water", "grass", "ice"],
        "half_damage_from": ["poison", "rock"], 
    },
    "ice": {
        "double_damage_from": ["fighting", "rock", "steel", "fire"],
        "half_damage_from": ["ice"],
    },
    "normal": {
        "double_damage_from": ["fighting"],
        "half_damage_from": [],
        "no_damage_from": ["ghost"],
    },
    "poison": {
        "double_damage_from": ["ground", "psychic"],
        "half_damage_from": ["fighting", "poison", "bug", "grass", "fairy"],
    },
    "psychic": {
        "double_damage_from": ["bug", "ghost", "dark"],
        "half_damage_from": ["fighting", "psychic"],
    },
    "rock": {
        "double_damage_from": ["fighting", "ground", "steel", "water", "grass"],
        "half_damage_from": ["normal", "flying", "poison", "fire"],
    },
    "steel": {
        "double_damage_from": ["fighting", "ground", "fire"],
        "half_damage_from": ["normal", "flying", "rock", "bug", "steel", "grass", "psychic","ice", "dragon", "fairy"],
        "no_damage_from": ["poison"]
    },
    "water": {
        "double_damage_from": ["grass", "electric"],
        "half_damage_from": ["steel", "fire", "water", "ice"],
    }
}

export default typeRelations;