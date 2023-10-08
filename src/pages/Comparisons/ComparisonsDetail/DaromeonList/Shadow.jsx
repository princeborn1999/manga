import shadow01 from "../../../../assets/kengan/shadow/shadow01.jpg";
import shadow02 from "../../../../assets/kengan/shadow/shadow02.jpg";
function Shadow() {
  return (
    <div>
      <p>
        How can I create shadow effects? Daromeon frequently employs a
        'whisker-like' technique to outline the edges of shadows.
      </p>

      <div className="flex">
        <img className="w-96 p-2" src={shadow01} alt="" />
        <img className="w-96 p-2" src={shadow02} alt="" />
      </div>
    </div>
  );
}
export default Shadow;
