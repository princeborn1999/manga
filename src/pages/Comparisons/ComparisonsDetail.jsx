import { useLocation } from "react-router-dom";
import ComparisonsDaromeon from "./ComparisonsDetail/ComparisonsDaromeon";
import ComparisonsHiro from "./ComparisonsDetail/ComparisonsHiro";
import ComparisonsOne from "./ComparisonsDetail/ComparisonsOne";
function ComparisonsDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const author = queryParams.get("author");
  return (
    <div className="p-5">
      {author === "Daromeon" && <ComparisonsDaromeon />}
      {author === "Hiro Mashima" && <ComparisonsHiro />}
      {author === "One" && <ComparisonsOne />}
    </div>
  );
}

export default ComparisonsDetail;
