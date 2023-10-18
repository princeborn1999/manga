import { useState } from "react";
import Shadow from "./DaromeonList/Shadow";
import Fight from "./DaromeonList/Fight";
import Background from "./DaromeonList/Background";
import Crowd from "./DaromeonList/Crowd";
import Danger from "./DaromeonList/Danger";
import RoughDraft from "./DaromeonList/RoughDraft";
function ComparisonsDaromeon() {
  const [tab, setTab] = useState("Shadow");
  const lists = [
    {
      name: "Shadow",
    },
    {
      name: "Fight",
    },
    {
      name: "Background",
    },
    {
      name: "Crowd",
    },
    {
      name: "Danger",
    },
    {
      name: "Rough draft",
    },
  ];
  return (
    <div className="flex">
      <div className="border-4 border-gray-400 w-48 h-96 rounded-xl bg-gray-200">
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
        {tab === "Shadow" && <Shadow />}
        {tab === "Fight" && <Fight />}
        {tab === "Background" && <Background />}
        {tab === "Crowd" && <Crowd />}
        {tab === "Danger" && <Danger />}
        {tab === "Rough draft" && <RoughDraft />}
      </div>
    </div>
  );
}
export default ComparisonsDaromeon;
