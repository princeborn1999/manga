import TopNavComponent from "../../components/TopNav";
import ComparisonsSeries from "./ComparisonsSeries";
import { Route, Switch } from "react-router-dom";
import ComparisonsDetail from "./ComparisonsDetail";
import { BrowserRouter } from "react-router-dom";
function Comparisons() {
  return (
    <div className="w-full h-full">
      <TopNavComponent />
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
