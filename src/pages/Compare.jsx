import { useState } from "react";
import CompareAnalysis from "../components/compare/CompareAnalysis";
import CompareTeamSlot from "../components/compare/CompareTeamSlot";
import Header from "../components/Header";

export default function Compare() {
  // set user chosen teams to send to evaluate
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const [userTeams, setUserTeams] = useState(
    JSON.parse(localStorage.getItem("allTeams")) || []
  );

  return (
    <>
      <div className="table-lg:h-screen table-lg:w-screen table-sm:h-full table-sm:w-full table-lg:overflow-y-hidden z-20">
        <Header />
        <div className="flex flex-col justify-center items-center  h-full w-full bg-gradient-to-r from-gray-600 to-gray-800 gap-5 p-7">
          {/* <h1 className="text-4xl text-white font-bold ">Compare Teams</h1> */}

          <div className="flex flex-row w-full h-full justify-center items-center gap-4">
            <CompareTeamSlot setTeam={setTeam1} />

            <CompareAnalysis team1={team1} team2={team2} />

            <CompareTeamSlot setTeam={setTeam2} />
          </div>
        </div>
      </div>
    </>
  );
}
