import { useEffect, useState } from "react";
import TeamSelectModal from "./TeamSelectModal";

export default function CompareTeamSlot(props) {
  // component display
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [isTeamChosen, setIsTeamChosen] = useState(false);

  // component information when team is chosen
  const [chosenTeam, setChosenTeam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [chosenTeamName, setChosenTeamName] = useState("");

  useEffect(() => {
    if(chosenTeam.length !== 0){
      let newTeam = chosenTeam.filter((pokemon) => {
        return pokemon !== null;
      });

      setFilteredTeam([...newTeam]);
    } 
  },[chosenTeam])

  const mapList = [1, 2, 3, 4, 5, 6];

  // handle addition of team to compare
  const handleAddition = (name, team) => {
    setShowSelectModal(false);
    setIsTeamChosen(true);
    setChosenTeam(team);
    setChosenTeamName(name);

    props.setTeam(team);
  };

  // handle removal of team to compare
  const handleRemove = () => {
    setIsTeamChosen(false);
    setChosenTeam([]);
    setChosenTeamName("");

    props.setTeam([]);
  };

  return (
    <>
      {showSelectModal && (
        <TeamSelectModal
          handleAddition={handleAddition}
          setShowSelectModal={setShowSelectModal}
        />
      )}

      <div className="flex justify-center items-center w-1/4 h-4/5 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 mb-20">
        {isTeamChosen ? (
          <div className="flex flex-col h-full w-full justify-center items-center">
            <p className="col-span-2 text-4xl text-white">{chosenTeamName}</p>

            <div className="grid grid-cols-2 gap-10 p-5 mb-5">
              {mapList.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center col-span-1 text-center"
                  >
                    <div className="bg-[url(./assets/pokeball.png)] bg-cover bg-opacity-50 flex flex-col items-center justify-center max-h-20 h-20 w-20">
                      <div className="opacity-100">
                        {(filteredTeam[index] !== undefined) && (
                          <img
                            src={filteredTeam[index]?.front}
                            height={50}
                            width={50}
                          />
                        )}
                      </div>
                    </div>
                    {filteredTeam[index] !== undefined && (
                      <p className="text-white">{filteredTeam[index]?.name || ""}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleRemove}
              className="bg-red-500 rounded-lg p-2"
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSelectModal(true)}
            className="col-span-2 bg-purple-500 rounded-md px-10 py-2 text-white font-PixelSans hover:bg-purple-600"
          >
            Choose Team
          </button>
        )}
      </div>
    </>
  );
}
