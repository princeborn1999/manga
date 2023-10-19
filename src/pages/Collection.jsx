import TopNavComponent from "../components/TopNav";
function Collection() {
  const recommendBar = [
    {
      name: 'shadow',
    },
    {
      name: 'fight'
    }
  ]
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
      <div className="justify-center flex pt-5" aria-label="search-bar">
        <label htmlFor="" className="text-2xl">filter  :</label>
        <select class="appearance-none p-2">
          <option>All</option>
          <option>Shadow</option>
          <option>Background</option>
          <option>Crowd</option>
        </select>
        <input
          type="text"
          className="w-48 border border-gray-300 mx-2 rounded-lg "
        />
        <button className="mx-2 p-2 bg-slate-200 rounded-lg">Search</button>
      </div>


      <div className="flex justify-center pt-48 text-2xl">
        <p>Coming Soon</p>
      </div>
    </div>
  );
}
export default Collection;
