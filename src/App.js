import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Comparisons from "./pages/Comparisons";
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
      <Route exact path="/Resources"></Route>
      <Route exact path="/Collection"></Route>
      <Route exact path="/Tips"></Route>
    </div>
  );
}

export default App;
