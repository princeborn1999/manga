import fight01 from "../../../../assets/kengan/fight/fight01.jpg";
function Fight() {
  return (
    <div>
      <p>
        Daromeon often uses broad, white strokes to substitute for the fist, 
        <br></br>
        effectively conveying both a sense of speed and the impact of a punch.
      </p>

      <div className="flex">
        <img className="w-96 p-2" src={fight01} alt="" />
      </div>
    </div>
  );
}
export default Fight;
