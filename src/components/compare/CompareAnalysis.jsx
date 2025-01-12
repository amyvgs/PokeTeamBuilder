import { useEffect, useRef, useState } from "react";
import useCreateAnalysis from "../../hooks/AnalysisHook";
import TypeCompareMapDisplay from "./TypeCompareMap";

export default function CompareAnalysis(props) {
    // useState to determine bottom of div
    const [showBottomShadow, setShowBottomShadow] = useState(true);
    const containerRef = useRef(null);

    // function to determine if scroll has reached bottom
    useEffect(() => {
        const handleScroll = () => {
            const div = containerRef.current;
            if (div.scrollTop + div.clientHeight < div.scrollHeight) {
                setShowBottomShadow(true);
            } else {
                setShowBottomShadow(false);
            }
        };

        const divElement = containerRef.current;
        if (divElement) {
            divElement.addEventListener('scroll', handleScroll);
            return () => divElement.removeEventListener('scroll', handleScroll);
        }
    }, []);


    const team1Analysis = useCreateAnalysis(props.team1);
    const team2Analysis = useCreateAnalysis(props.team2);

    useEffect(() => {
        console.log(team1Analysis);
        console.log(team2Analysis);
    }, [team1Analysis, team2Analysis])


    return (
        <div ref={containerRef} style={{ boxShadow: showBottomShadow ? 'inset 0 -20px 15px rgba(0, 0, 0, 0.9)' : 'none' }} className={`relative w-1/3 h-5/6 bg-gray-800 mb-20 overflow-y-auto p-5 rounded-lg`}>
            <div className={`w-full h-full flex flex-col`}>
                {Object.keys(team1Analysis).map((type, index) => {
                    return <TypeCompareMapDisplay key={index} type={type} team1Value={team1Analysis[type]} team2Value={team2Analysis[type]} />
                })}
            </div>
        </div>
    );
}