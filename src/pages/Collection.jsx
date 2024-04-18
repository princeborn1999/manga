import TopNavComponent from "../components/TopNav";
import { useState, useEffect } from "react";
// import collectionCardService from "../services/collectionCard.service";
function Collection() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(()=>{
  },[])

  function clickToSearch(){
    const req = {
      name: inputValue ? inputValue : selectedOption
    }
  }
  const recommendBar = ['character','female','male',
                        'background','ship','building','crowd',
                        'fight','tree','fire','tsunami','boobs','punch',
                        'vibe','danger','fast','running','dodge','dark skin',
                        'forest','muscle','shadow','injuired','rough draft',
                        ]
  return (
    <div className="w-full">
      {/* 一部分來自於 recommend那邊
    可以filter 條件
  */}
      <TopNavComponent />
      <div className="justify-center flex pt-5" aria-label="search-bar">
        <label htmlFor="" className="text-2xl">Select  :</label>
        <select className="appearance-none p-2 rounded-lg"
                disabled={inputValue !== ''}
                value={selectedOption}
                onChange={handleOptionChange}
                >
          <option value="All" className="text-lg">All</option>
          {recommendBar.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <input
          value={inputValue}
          placeholder="Manual Entry"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-48 border border-gray-300 mx-2 rounded-lg "
        />
        <button className="mx-2 p-2 bg-slate-200 rounded-lg" onClick={()=>clickToSearch()}>Search</button>
      </div>
      <div className="flex justify-center pt-48 text-2xl">
      </div>
    </div>
  );
}
export default Collection;
