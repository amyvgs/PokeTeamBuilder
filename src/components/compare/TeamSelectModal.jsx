import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamMapDisplay from "../TeamMapDisplay";

export default function TeamSelectModal(props) {
  const [userTeams, setUserTeams] = useState(
    JSON.parse(localStorage.getItem("allTeams")) || []
  );

  // facilitate user navigation if there is not a number of sucfficient teams stored
  const nav = useNavigate();

  return (
    <div
      onClick={() => props.setShowSelectModal(false)}
      className="fixed flex items-center justify-center inset-0 bg-black/60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center bg-slate-800 h-1/2 w-1/2 opacity-100 p-10 overflow-y-scroll rounded-lg shadow-lg shadow-black text-white"
      >
        <p className="font-PixelSans font-semibold text-4xl mb-10 sticky underline">
          Select Team
        </p>
        {userTeams.length === 0 || userTeams.length === 1 ? (
          <div className="flex flex-col justify-center items-center text-center space-y-5">
            <p className="text-lg">
              You do not have enough teams stored for this feature. You need at
              least two teams stored to compare, you currently have{" "}
              <span className="text-red-400 font-bold underline">
                {userTeams.length}
              </span>{" "}
              team(s). Click the button below to make more teams.
            </p>
            <button
              onClick={() => nav("/")}
              className="bg-purple-500 rounded-md px-7 py-2 text-white font-PixelSans hover:bg-purple-600 hover:scale-105"
            >
              Go To Team Builder
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full w-3/4 gap-2">
            {userTeams.map((element, index) => {
              return (
                <TeamMapDisplay
                  key={index}
                  modal={true}
                  handleAddition={props.handleAddition}
                  index={index}
                  teamName={element.name}
                  team={element.team}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
