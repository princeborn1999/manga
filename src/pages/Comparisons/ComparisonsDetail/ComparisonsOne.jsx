import { useState } from "react";
import Background from "./OneList/Background";
import Fight from "./OneList/Fight";
import Vibe from "./OneList/Vibe";
import Character from "./OneList/Character";
function ComparisonsOne() {
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
        <div className="p-2">
          {tab === "Background" && <Background />}
          {tab === "Fight" && <Fight />}
          {tab === "Vibe" && <Vibe />}
          {tab === "Character" && <Character />}
        </div>
      </div>
    );
  }
export default ComparisonsOne