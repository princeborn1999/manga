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
        {/* How can I create shadow effects? Daromeon frequently employs a
        'whisker-like' technique to outline the edges of shadows. */}
      </p>
      <p>Outside</p>
      <div className="flex">
        <img className="w-full p-2" src={ft01} alt="" />
      </div>
      <div className="flex">
        <img className="w-1/2 p-2" src={ft02} alt="" />
      </div>

      <div className="flex">
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
      </div>
      <p>Inner</p>
    </div>
  );
}
export default Background;
