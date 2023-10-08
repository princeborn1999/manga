import { useState } from "react";
import Shadow from "./DaromeonList/Shadow";
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
      name: "Food",
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
      <div className="p-2">{tab === "Shadow" && <Shadow />}</div>
    </div>
  );
}
export default ComparisonsDaromeon;
