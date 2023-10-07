import TopNavComponent from "../components/TopNav";
function Resources() {
  return (
    <div className="w-full">
      <TopNavComponent />
      {/* 
    Youtube Channel  直齋 深雪魔王 達露梅恩 真島浩
  */}
      <div className="">
        <a href="https://www.youtube.com/@deepblizzard" target="_blank">
          深雪繪畫課
        </a>
        <a href="https://www.youtube.com/@saitonaoki2/featured" target="_blank">
          さいとうなおき2
        </a>
        <a href="https://www.youtube.com/@darelmeohn" target="_blank">
          だろめおん
        </a>
        <a href="https://www.youtube.com/@mashimaCh" target="_blank">
          Hiro Mashima
        </a>
      </div>
    </div>
  );
}
export default Resources;
