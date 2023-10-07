import TopNavComponent from "../components/TopNav";
function Comparisons() {
  const list = [
    {
      author: "Daromeon",
      series: "Kengan Ashura (ケンガンアシュラ) ",
    },
    {
      author: "Hiro Mashima",
      series: "Fairy Tail (フェアリーテイル) ",
    },
    {
      author: "Nakaba Suzuki",
      series: "The Seven Deadly Sins (七つの大罪) ",
    },
  ];
  return (
    <div className="w-full">
      <TopNavComponent />
      {/* 
        達露梅恩 - 拳願阿修羅
        真島浩 - 妖精尾巴
        鈴木央 - 七大罪
        劇情作畫場景
        路人
    */}
      <div className="flex">
        {list.map((item, index) => (
          <div
            key={index}
            className={`hover:bg-red-800 text-white bg-red-700 w-96 p-2 m-2`}
          >
            <div className="flex">
              <strong>Author:</strong>
              <p>{item.author}</p>
            </div>
            <div className="flex">
              <strong>Series:</strong>
              <p>{item.series}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Comparisons;
