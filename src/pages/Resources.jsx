import TopNavComponent from "../components/TopNav";
function Resources() {
  const channels = [
    {
      name: "深雪繪畫課",
      url: "https://www.youtube.com/@deepblizzard",
    },
    {
      name: "さいとうなおき2",
      url: "https://www.youtube.com/@saitonaoki2/featured",
    },
    {
      name: "だろめおん",
      url: "https://www.youtube.com/@darelmeohn",
    },
    {
      name: "Hiro Mashima",
      url: "https://www.youtube.com/@mashimaCh",
    },
  ];
  return (
    <div className="w-full">
      <TopNavComponent />
      {/* 
    Youtube Channel  直齋 深雪魔王 達露梅恩 真島浩
   TODO:挑幾LIST在上面
  */}
      <div className="p-5">
        <div className="mx-48 p-5 border-2 border-black">
          <p>
            If you're a beginner looking to improve your drawing skills,
            consider following the following channels where you can acquire
            valuable techniques and knowledge.
          </p>
        </div>
        <div className="p-5">
          <div className="flex">
            {channels.map((channel, index) => (
              <div key={index}>
                <a href={channel.url} target="_blank">
                  <div
                    className="p-2 w-48 bg-gradient-to-r from-slate-300 
                              to-slate-400 hover:to-red-600 text-gray-900 m-2"
                  >
                    {channel.name}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resources;
