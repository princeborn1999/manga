import ft03 from "../../../../assets/fairyTail/ft03.jpg";
function Crowd() {
  return (
    <div>
      <p>
        {/* How can I create shadow effects? Daromeon frequently employs a
        'whisker-like' technique to outline the edges of shadows. */}
      </p>
      <div className="flex">
        <img className="w-1/2 p-2" src={ft03} alt="" />
      </div>
    </div>
  );
}
export default Crowd;
