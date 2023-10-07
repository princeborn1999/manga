import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Comparisons from "./pages/Comparisons";
import Collection from "./pages/Collection";
import Resources from "./pages/Resources";
import Tips from "./pages/Tips";
function App() {
  return (
    <div className="flex">
      <SideNav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Comparisons">
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
  );
}

export default App;
