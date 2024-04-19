import { useState } from "react";
import Character from "./DaromeonList/Character";
import Fight from "./DaromeonList/Fight";
import Vibe from "./DaromeonList/Vibe";
import Backgroud from "./DaromeonList/Background";
import RoughDraft from "./DaromeonList/RoughDraft";
function ComparisonsDaromeon() {
  const [tab, setTab] = useState("Character");
  const lists = [
    {
      name: "Character",
    },
    {
      name: "Fight",
    },
    {
      name: "Vibe",
    },
    {
      name: "Background",
    },
    {
      name: "Rough draft",
    },
  ];
  return (
    <div className="flex">
      <div className="border-4 border-gray-400 w-48 rounded-xl bg-gray-200">
        {lists.map((listItem, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gradient-to-r hover:from-gray-400 rounded-lg cursor-pointer"
            onClick={() => {
              setTab(listItem.name);
            }}
          >
            <div className="text-lg font-semibold">
              <p>{listItem.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 w-4/5">
        {tab === "Character" && <Character />}
        {tab === "Fight" && <Fight />}
        {tab === "Vibe" && <Vibe />}
        {tab === "Background" && <Backgroud />}
        {tab === "Rough draft" && <RoughDraft />}
      </div>
    </div>
  );
}
export default ComparisonsDaromeon;
