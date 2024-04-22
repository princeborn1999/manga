import TopNavComponent from "../components/TopNav";
import { useState, useEffect } from "react";
import imageFairyTailSearchService from "../services/imageFairyTailSearch.service";
import imageKenganSearchService from "../services/imageKenganSearch.service";
import imageOneSearchService from "../services/imageOneSearch.service";
// import collectionCardService from "../services/collectionCard.service";
function Collection() {
  const [inputValue, setInputValue] = useState('');
  const [imageSet, setImageSet] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(()=>{
    console.log(selectedOption)
    switch (selectedOption){
      case 'all':
        setImageSet([
          ...imageKenganSearchService.getAllK(),
          ...imageFairyTailSearchService.getAllF(),
          ...imageOneSearchService.getAllO(),
      ]);
        break;
      case 'fairy tail':
        setImageSet(imageFairyTailSearchService.getAllF());
        break;
      case 'kengan ashura':
        setImageSet(imageKenganSearchService.getAllK());
        break;
      case 'one punch':
        setImageSet(imageOneSearchService.getAllO());
        break;
      default:
        setImageSet([]);
      }
  },[selectedOption])

  // const recommendBar = ['character','female','male',
  //                       'background','ship','building','crowd',
  //                       'fight','tree','fire','tsunami','boobs','punch',
  //                       'vibe','danger','fast','running','dodge','dark skin',
  //                       'forest','muscle','shadow','injuired','rough draft',
  //                       ]
  const recommendBar = ['kengan ashura','fairy tail','one punch']
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
          <option value="all" className="text-lg">All</option>
          {recommendBar.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        {/* <input
          value={inputValue}
          placeholder="Manual Entry"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-48 border border-gray-300 mx-2 rounded-lg "
        /> */}
        {/* <button className="mx-2 p-2 bg-slate-200 rounded-lg" onClick={()=>clickToSearch()}>Search</button> */}
      </div>
      <div className="flex justify-center p-12 text-2xl">
        <div className="grid grid-cols-4 gap-4">
            {imageSet.map((image, index) => (
              <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                <div className="m-1 bg-slate-400 rounded-md hover: hover:scale-125 transition-transform">
                  <img key={index} className="w-96 p-2" src={image} alt={`imageSet ${index + 1}`} />
                </div> 
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Collection;
