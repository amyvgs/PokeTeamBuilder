export default function TypeTableDisplay(props){
    // type bg coloring based on passed prop
    const typeColoring = {
        "bug": "bg-lime-600",
        "dark": "bg-black/30",
        "dragon": "bg-indigo-600",
        "electric": "bg-amber-400",
        "fairy": "bg-pink-500",
        "fighting": "bg-orange-500",
        "fire": "bg-red-600",
        "flying": "bg-sky-400",
        "ghost": "bg-violet-800",
        "grass": "bg-green-700",
        "ground": "bg-amber-800",
        "ice": "bg-cyan-600",
        "normal": "bg-gray-300",
        "poison": "bg-purple-500",
        "psychic": "bg-fuchsia-600",
        "rock": "bg-yellow-600",
        "steel": "bg-slate-400",
        "water": "bg-blue-600"
    };


    return(
        <div className={`col-span-1 text-white mb-4 text-center`}>
            <div className={`flex justify-center items-center ${typeColoring[props.type]} p-2 text-lg rounded-xl font-extrabold shadow-md shadow-black font-PixelSans`}>
                <p>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</p>
            </div>

            <p className={`${props.value === 0 ? "text-white" : (props.value > 0 ? "text-green-500" : "text-red-500")}`}>{props.value}x</p>
        </div>
    );

}