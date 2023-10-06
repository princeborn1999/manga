import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [isHovered, setIsHovered] = useState("");
  return (
    <div className="w-4/5 h-screen flex justify-center items-center">
      <div className="bg-gray-900 w-96 h-96 z-10">
        <div className="flex h-1/2 w-full">
          <Link to="/asdasd" className="w-full h-full">
            <div
              className={`h-full w-full  hover:scale-110 hover:-translate-x-10 hover:-translate-y-10 
                                        hover:shadow-lg cursor-pointer
                                        hover:bg-white
                                        hover:border-2
                                        hover:border-black 
                                        duration-300 ease-in-out
                                        bg-slate-200
                                        `}
              onMouseEnter={() => setIsHovered("block1")}
              onMouseLeave={() => setIsHovered("")}
            >
              <h1>作品推薦</h1>
            </div>
          </Link>
          <Link to="/qweqwe" className="w-full h-full">
            <div
              className={`h-full w-full  hover:scale-110 hover:translate-x-10 hover:-translate-y-10 
                            hover:shadow-lg cursor-pointer
                            hover:bg-white
                            hover:border-2
                            hover:border-black
                            duration-300 ease-in-out
                            bg-slate-300
                            `}
              onMouseEnter={() => setIsHovered("block2")}
              onMouseLeave={() => setIsHovered("")}
            >
              <h1>推薦頻道</h1>
            </div>
          </Link>
        </div>
        <div className="flex h-1/2 w-full">
          <Link to="/zxczxc" className="w-full h-full">
            <div
              className={`h-full w-full hover:scale-110 hover:-translate-x-10 hover:translate-y-10 
                                hover:shadow-lg cursor-pointer
                                hover:bg-white
                                hover:border-2
                                hover:border-black
                                duration-300 ease-in-out
                                bg-slate-400
                                `}
              onMouseEnter={() => setIsHovered("block3")}
              onMouseLeave={() => setIsHovered("")}
            >
              <h1>繪畫素材</h1>
            </div>
          </Link>
          <Link to="/rfvrfv" className="w-full h-full">
            <div
              className={`h-full w-full hover:scale-110 hover:translate-x-10 hover:translate-y-10 
                                hover:shadow-lg cursor-pointer
                                hover:bg-white
                                hover:border-2
                                hover:border-black
                                duration-300 ease-in-out
                                bg-slate-500
                                `}
              onMouseEnter={() => setIsHovered("block4")}
              onMouseLeave={() => setIsHovered("")}
            >
              <h1>額外技巧</h1>
            </div>
          </Link>
        </div>
      </div>
      {/* 背後的漫畫背景 */}
      <div className="absolute h-full w-full z-0">
        <div className="w-full h-1/2 flex">
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 
                        ${
                          isHovered === "block1"
                            ? "bg-slate-300"
                            : "bg-slate-400"
                        }`}
          ></div>
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 
                            ${
                              isHovered === "block2"
                                ? "bg-slate-400"
                                : "bg-slate-500"
                            }`}
          ></div>
        </div>
        <div className="w-full h-1/2 flex">
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 
                            ${
                              isHovered === "block3"
                                ? "bg-slate-500"
                                : "bg-slate-600"
                            }`}
          ></div>
          <div
            className={`w-1/2 h-full ease-in-out duration-1000 
                            ${
                              isHovered === "block4"
                                ? "bg-slate-600"
                                : "bg-slate-700"
                            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
