import TopNavComponent from "../components/TopNav";
function Collection() {
  const list = [
    {
      imgName: "",
    },
    {
      imgName: "",
    },
    {
      imgName: "",
    },
  ];
  return (
    <div className="w-full">
      {/* 一部分來自於 recommend那邊
    可以filter 條件
  */}
      <TopNavComponent />
      {/* <div>
        <input
          type="text"
          className="w-36 border border-gray-300 mx-2 rounded-lg"
        />
        <button>Search</button>
      </div> */}
      <div className="flex justify-center pt-48 text-2xl">
        <p>Coming Soon</p>
      </div>
    </div>
  );
}
export default Collection;
