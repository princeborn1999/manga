import { Link } from "react-router-dom";

function TopNavComponent() {
  return (
    <div>
      <nav className="flex">
        <Link to="/">
          <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold bg-white hover:bg-gray-900 hover:text-white text-black rounded-xl">
            HOME
          </li>
        </Link>
        <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold bg-white hover:bg-gray-900 hover:text-white text-black rounded-xl">
          COMPARISONS
        </li>
        <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold bg-gray-900 text-white rounded-xl">
          RESOURCES
        </li>
        <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold bg-gray-900 text-white rounded-xl">
          COLLECTION
        </li>
        <li className="hover:animate-pulse p-2 m-2 justify-center flex w-36 font-bold bg-gray-900 text-white rounded-xl">
          TIPS
        </li>
      </nav>
    </div>
  );
}
export default TopNavComponent;
