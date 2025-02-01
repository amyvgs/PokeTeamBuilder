import TypeTableDisplay from "./TypeTableDisplay";
import useCreateAnalysis from "../hooks/AnalysisHook";

export default function TeamAnalysis(props) {

    const analysis = useCreateAnalysis(props.teamList)

    return (
        <>
            <div className="flex flex-col overflow-y-scroll w-2/5 h-4/5 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-md rounded-lg mb-20 mr-10 p-6 animate-fadeIn">
                <div className="flex flex-row mb-6">
                    <h1 className="font-PixelSans text-2xl text-white">Team Analysis</h1>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {Object.keys(analysis).map((type, index) => {
                        return <TypeTableDisplay key={index} type={type} value={analysis[type]} />
                    })}

                </div>
            </div>
        </>
    );
}