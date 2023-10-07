import TopNavComponent from "../../components/TopNav";
import ComparisonsSeries from "./ComparisonsSeries";
import { Route } from "react-router-dom";
import ComparisonsDetail from "./ComparisonsDetail";
import { BrowserRouter } from "react-router-dom";
function Comparisons() {
  return (
    <div className="w-full">
      <TopNavComponent />
      {/* 
        達露梅恩 - 拳願阿修羅
        真島浩 - 妖精尾巴
        鈴木央 - 七大罪
        劇情作畫場景
        路人
    */}
      <BrowserRouter>
        <Route exact path="/Comparisons">
          <ComparisonsSeries />
        </Route>
        <Route exact path="/Comparisons/detail">
          <ComparisonsDetail />
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default Comparisons;
