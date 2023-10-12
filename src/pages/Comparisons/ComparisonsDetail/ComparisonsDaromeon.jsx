import { useState } from "react";
import Shadow from "./DaromeonList/Shadow";
import Fight from "./DaromeonList/Fight";
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
      name: "Peace",
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
      <div className="p-2">
        {tab === "Shadow" && <Shadow />}
        {tab === "Fight" && <Fight />}
        {tab === "Background" && <Fight />}
        {tab === "Crowd" && <Fight />}
        {tab === "Danger" && <Fight />}
        {tab === "Peace" && <Fight />}
        {tab === "Rough draft" && <Fight />}
        
        </div>
    </div>
  );
}
export default ComparisonsDaromeon;
