import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Comparisons from "../pages/Comparisons/Comparisons";
import Collection from "../pages/Collection";
import Resources from "../pages/Resources";
import Tips from "../pages/Tips";
import AddCollection from "../pages/AddCollection";
import { useConfig } from "../contexts/ConfigContext";
import { useState, useEffect } from "react";

function RouterComponent(){
  const { dispatch } = useConfig();
  const [inputSequence, setInputSequence] = useState('');
  const targetSequence = 'imprinceEnter';
  const [developMode, setDevelopMode] = useState(false);
  const openDeveloperMode = () => {
    dispatch({type: 'OPEN_DEVELOPERMODE'})
  }
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
        openDeveloperMode()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    checkTargetSequence();

    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputSequence])
    return(
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
    )
}
export default RouterComponent