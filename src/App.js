import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <SideNav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/"></Route>
      <Route exact path="/"></Route>
      <Route exact path="/"></Route>
      <Route exact path="/"></Route>
    </div>
  );
}

export default App;
