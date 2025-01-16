import { useState } from "react";

export default function Accordion(props) {
  // toggle accordion
  const [isActive, setIsActive] = useState(false);

  // behavior for selecting a value, populate the list
  const checkBoxBehavior = (e) => {
    let isChecked = e.target.checked;
    let checkValue = e.target.value;

    if (isChecked) {
      props.updateList([...props.list, checkValue]);
    } else {
      let updatedList = props.list.filter((element) => {
        return element !== checkValue;
      });

      props.updateList([...updatedList]);
    }
  };

  return (
    <div className="flex flex-col w-full text-white">
      <div className="" onClick={() => setIsActive(!isActive)}>
        <div
          className={`flex flex-row items-start border-b-4 border-black bg-slate-900 justify-between p-3 text-lg`}
        >
          {props.title}
          <p className="hover:cursor-pointer text-xl">{isActive ? "-" : "+"}</p>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: isActive ? "250px" : "0px",
            padding: isActive ? "7px" : "0px",
            transform: isActive ? "translateY(0)" : "translatY(-10px)",
            transition: "all 0.7s ease",
            visibility: isActive ? "visible" : "hidden",
          }}
          className={`bg-slate-800 p-5 grid grid-cols-3 `}
        >
          {props.content.map((element, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row gap-2 col-span-1 transition-opacity ease-out duration-200 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <input
                  onChange={checkBoxBehavior}
                  type="checkbox"
                  className="accent-purple-500"
                  value={
                    typeof element === "object"
                      ? element.value
                      : element.toLowerCase()
                  }
                />
                <p>{typeof element === "object" ? element.name : element}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
