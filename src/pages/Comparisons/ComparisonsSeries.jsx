import { Link } from "react-router-dom";
import kengan from '../../assets/comparison/kengan.jpg'
import fairytail from '../../assets/comparison/fairytail.jpg'
function ComparisonsSeries() {
  const list = [
    {
      author: "Daromeon",
      series: "Kengan Ashura (ケンガンアシュラ) ",
      image: kengan
    },
    {
      author: "Hiro Mashima",
      series: "Fairy Tail (フェアリーテイル) ",
      image: fairytail
    },
    // {
    //   author: "Nakaba Suzuki",
    //   series: "The Seven Deadly Sins (七つの大罪) ",
    // },
  ];
  return (
    <div className="flex h-full pb-10 px-10">
      {list.map((item, index) => (
        <div
         className="w-full h-full"
          key={index}
          // className={`hover:bg-gradient-to-r hover:from-purple-700 hover:to-red-700  text-white bg-purple-700 w-96 p-2 m-2 rounded-lg p-4`}
        >
          <Link to={`/Comparisons/details?author=${item.author}`}>
            <div className="hover:opacity-100 transition duration-700 ease-in-out opacity-50 h-screen text-black hover:text-white flex justify-center pt-96"
              style={{backgroundImage: `url(${item.image})`,backgroundSize: 'cover',backgroundPosition: 'center'}}
              >
                <div>
                  <div className="flex text-4xl font-bold">
                    <p>{item.author}</p>
                  </div>
                  <div className="flex text-2xl">
                    <p>{item.series}</p>
                  </div>
                </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ComparisonsSeries;
