import TopNavComponent from "../../components/TopNav";
import ComparisonsSeries from "./ComparisonsSeries";
import { Route, Switch } from "react-router-dom";
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
      <Route exact path="/Comparisons">
        <ComparisonsSeries />
      </Route>
      <Route path="/Comparisons/details">
        <ComparisonsDetail />
      </Route>
    </div>
  );
}
export default Comparisons;
