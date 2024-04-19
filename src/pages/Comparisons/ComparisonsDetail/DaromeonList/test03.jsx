import fight01 from "../../../../assets/kengan/fight/fight01.jpg";
import fight02 from "../../../../assets/kengan/fight/fight02.jpg";
function Fight() {
  return (
    <div>
      <p>
        Daromeon often uses broad, white strokes to substitute for the fist, 
        effectively conveying both a sense of speed and the impact of a punch.
      </p>
      <div className="flex">
        <img className="w-96 p-2" src={fight01} alt="" />
      </div>
      <p>
      In some fight scenes, slow motion is used to impactful moments, such as punches, adding emphasis to the action.
      </p>
      <div className="flex">
        <img className="w-96 p-2" src={fight02} alt="" />
      </div>
    </div>
  );
}
export default Fight;
