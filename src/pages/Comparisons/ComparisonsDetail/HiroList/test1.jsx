import ft01 from "../../../../assets/fairyTail/ft01.jpg";
import ft02 from "../../../../assets/fairyTail/ft02.jpg";
import ft04 from "../../../../assets/fairyTail/ft04.jpg";
import ft05 from "../../../../assets/fairyTail/ft05.jpg";
import ft06 from "../../../../assets/fairyTail/ft06.jpg";
import ft07 from "../../../../assets/fairyTail/ft07.jpg";
function Background() {
  return (
    <div>
      <p>
      Hiro-san frequently crafts breathtaking scenes, such as vast cities, grand castles, 
      and towering mountains, which enhance the entire page with their awe-inspiring presence.
      </p>
      <div className="flex">
        <img className="h-96 p-2" src={ft01} alt="" />
      </div>
      <p>White and black are employed to compose the background of buildings,
         with a emphasis on the use of white, particularly in the scenery.</p>
      <div className="flex">
        <img className="w-96 p-2" src={ft02} alt="" />
      </div>

      {/* <div className="flex">
        <img className="w-1/2 p-2" src={ft04} alt="" />
      </div>
      <div className="flex">
        <img className="w-1/2 p-2" src={ft05} alt="" />
      </div>
      <div className="flex">
        <img className="w-1/2 p-2" src={ft06} alt="" />
      </div>
      <div className="flex">
        <img className="w-1/2 p-2" src={ft07} alt="" />
      </div> */}
    </div>
  );
}
export default Background;
