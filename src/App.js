import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Comparisons from "./pages/Comparisons/Comparisons";
import Collection from "./pages/Collection";
import Resources from "./pages/Resources";
import Tips from "./pages/Tips";
import Modal from "./components/Modal";
import AddCollection from "./pages/AddCollection";
import { ModalProvider } from "./contexts/ModalContext";
import { useState, useEffect } from "react";
function App() {
  const [inputSequence, setInputSequence] = useState('');
  const targetSequence = 'imprinceEnter';
  const [developMode, setDevelopMode] = useState(false);
  useEffect(()=>{
    function handleKeyDown(event) {
      if(event.key === 'Escape'){
        setInputSequence('')
      }else{
        setInputSequence(prevSequence => prevSequence + event.key);
      }
    }
    function checkTargetSequence() {
      if (inputSequence.endsWith(targetSequence)) {
        console.log('Into the developer mode.')
        setDevelopMode(true);
      } else {
        setDevelopMode(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    checkTargetSequence();

    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputSequence])
  return (
    <ModalProvider>
    <div>
      <Modal /> 
      <div className="flex">
        <div className="w-1/5 z-10">
          <SideNav />
        </div>
        <div className="w-4/5 bg-slate-100 min-w-min">
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
          { developMode && 
          <Route exact path="/AddCollection">
            <AddCollection />
          </Route>
          }
        </div>
      </div>
    </div>
    </ModalProvider>
  );
}

export default App;
