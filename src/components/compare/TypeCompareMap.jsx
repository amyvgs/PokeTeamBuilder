import { useEffect, useState } from "react";

export default function TypeCompareMapDisplay(props) {
  // useState to determine if the user wants numerical representation
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // calculations for line ratios
  const [bottomRatio, setBottomRatio] = useState(0);
  const [team1Ratio, setTeam1Ratio] = useState(0);
  const [team2Ratio, setTeam2Ratio] = useState(0);

  useEffect(() => {
    setBottomRatio(Math.abs(props.team1Value) + Math.abs(props.team2Value));
  }, [props.team1Value, props.team2Value]);

  useEffect(() => {
    setTeam1Ratio(
      bottomRatio === 0 ? 0 : Math.abs(props.team1Value) / bottomRatio
    );
    setTeam2Ratio(
      bottomRatio === 0 ? 0 : Math.abs(props.team2Value) / bottomRatio
    );
  }, [bottomRatio]);

  return (
    <div className="flex flex-col col-span-1 justify-center items-center w-full h-full text-white border-b-2 border-black p-1">
      <h2 className="font-PixelSans text-2xl">{props.type}</h2>
      <div className="flex flex-row items-center w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex border-r-4 justify-end items-center border-black h-5 w-1/2 hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-50"
        >
          {!isHovered ? (
            <div
              style={{ width: `${team1Ratio * 100}%` }}
              className={`h-1 transition-all duration-700 ease-out  ${
                props.team1Value < 0 ? "bg-red-500" : "bg-green-500"
              }`}
            />
          ) : (
            <div
              className={`mr-20 ${
                props.team1Value === 0
                  ? "text-white"
                  : props.team1Value < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {props.team1Value}x
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          className="flex border-l-4 items-center border-black w-1/2 h-5  hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-50"
        >
          {!isHovered2 ? (
            <div
              style={{ width: `${team2Ratio * 100}%` }}
              className={`h-1 transition-all duration-700 ease-out ${
                props.team2Value < 0 ? "bg-red-500" : "bg-green-500"
              }`}
            />
          ) : (
            <div
              className={`ml-20 ${
                props.team2Value === 0
                  ? "text-white"
                  : props.team2Value < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {props.team2Value}x
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
