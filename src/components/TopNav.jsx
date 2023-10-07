function TopNavComponent() {
  return (
    <div>
      <nav className="flex">
        <li className="p-2 m-2 justify-center flex w-36 bg-white hover:bg-gray-900 hover:text-white text-black rounded-xl">
          HOME
        </li>
        <li className="p-2 m-2 justify-center flex w-36 bg-white hover:bg-gray-900 hover:text-white text-black rounded-xl">
          COMPARISONS
        </li>
        <li className="p-2 m-2 justify-center flex w-36 bg-gray-900 text-white rounded-xl">
          RESOURCES
        </li>
        <li className="p-2 m-2 justify-center flex w-36 bg-gray-900 text-white rounded-xl">
          COLLECTION
        </li>
        <li className="p-2 m-2 justify-center flex w-36 bg-gray-900 text-white rounded-xl">
          TIPS
        </li>
      </nav>
    </div>
  );
}
export default TopNavComponent;
