import { Link } from "react-router-dom";
function ComparisonsSeries() {
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
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className={`hover:bg-red-800 text-white bg-red-700 w-96 p-2 m-2`}
        >
          <Link to="/Comparisons/detail">
            <div className="flex">
              <strong>Author:</strong>
              <p>{item.author}</p>
            </div>
            <div className="flex">
              <strong>Series:</strong>
              <p>{item.series}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ComparisonsSeries;
