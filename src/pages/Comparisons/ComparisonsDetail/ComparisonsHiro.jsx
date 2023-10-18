import { useState } from "react";
import Background from "./HiroList/Background";
import Crowd from "./HiroList/Crowd";
function ComparisonsHiro() {
  const [tab, setTab] = useState("Background");
  const lists = [
    {
      name: "Background",
    },
    {
      name: "Crowd",
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
        {tab === "Background" && <Background />}
        {tab === "Crowd" && <Crowd />}
      </div>
    </div>
  );
}
export default ComparisonsHiro;
