import fight01 from "../../../../assets/kengan/fight/fight01.jpg";
function Fight() {
  return (
    <div>
      <p>
        {/* How can I create shadow effects? Daromeon frequently employs a
        'whisker-like' technique to outline the edges of shadows. */}
      </p>

      <div className="flex">
        <img className="w-96 p-2" src={fight01} alt="" />
      </div>
    </div>
  );
}
export default Fight;
