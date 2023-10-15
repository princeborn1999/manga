import { useLocation } from "react-router-dom";
import ComparisonsDaromeon from "./ComparisonsDetail/ComparisonsDaromeon";
import ComparisonsHiro from "./ComparisonsDetail/ComparisonsHiro";
function ComparisonsDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const author = queryParams.get("author");
  return (
    <div className="p-5">
      {author === "Daromeon" && <ComparisonsDaromeon />}
      {author === "Hiro Mashima" && <ComparisonsHiro />}
      {author === "Nakaba Suzuki" && <div>Coming soon!</div>}
    </div>
  );
}

export default ComparisonsDetail;
