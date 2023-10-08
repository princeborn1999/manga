import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Comparisons from "./pages/Comparisons/Comparisons";
import Collection from "./pages/Collection";
import Resources from "./pages/Resources";
import Tips from "./pages/Tips";
function App() {
  return (
    <div className="flex">
      <div className="w-1/5 z-10">
        <SideNav />
      </div>
      <div className="w-4/5 bg-slate-100">
        <Route exact path="/mangamentor">
          <Home />
        </Route>
        <Route exact path="/Comparisons">
          <Comparisons />
        </Route>
        <Route exact path="/Comparisons/details">
          <Comparisons />
        </Route>
        <Route exact path="/Resources">
          <Resources />
        </Route>
        <Route exact path="/Collection">
          <Collection />
        </Route>
        <Route exact path="/Tips">
          <Tips />
        </Route>
      </div>
    </div>
  );
}

export default App;
