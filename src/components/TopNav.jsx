import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useConfig } from "../contexts/ConfigContext";
function TopNavComponent() {
  const { state } = useConfig();
  const topNavliClass = "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
  const [showAddCollection, setShowAddCollection] = useState("");
  useEffect(()=>{
    if(state.isOpen){
      setShowAddCollection(true)
    }
  })
  return (
    <div className="hidden sm:flex justify-center">
      <nav className="flex rounded-3xl m-2 shadow-gray-400 shadow bg-black text-white">
        <Link to="/mangamentor">
          <li
            className={topNavliClass}
          >
            HOME
          </li>
        </Link>
        <Link to="/Comparisons">
          <li
            className={topNavliClass}
          >
            COMPARISONS
          </li>
        </Link>
        <Link to="/Resources">
          <li
            className={topNavliClass}
          >
            RESOURCES
          </li>
        </Link>
        <Link to="/Collection">
          <li
            className={topNavliClass}
          >
            COLLECTION
          </li>
        </Link>
        {/* 
        {
          showAddCollection &&
          <Link to="/AddCollection">
            <li
              className={
                "hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold "
              }
            >
              DEVELOPMODE
            </li>
        </Link>
        } */}
        <Link to="/Tips">
          <li
            className={topNavliClass}
          >
            TIPS
          </li>
        </Link>
      </nav>
    </div>
  );
}
export default TopNavComponent;
