import TopNavComponent from "../components/TopNav";
import axios from 'axios';
import { useState, useEffect } from "react";
import collectionCardService from "../services/collectionCard.service";
function Collection() {
  const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    //  一開始的首次全查詢
    collectionCardService.getAllCard()
      .then("Getting all card.")
      .catch((err)=>{
        console.error(err)
      })
  },[])

  function clickToSearch(){
    const req = {
      name: inputValue
    }
    
  }
  const recommendBar = [
    {
      name: 'shadow',
    },
    {
      name: 'fight'
    }
  ]
  const list = [
    {
      imgName: "",
    },
    {
      imgName: "",
    },
    {
      imgName: "",
    },
  ];
  return (
    <div className="w-full">
      {/* 一部分來自於 recommend那邊
    可以filter 條件
  */}
      <TopNavComponent />
      <div className="justify-center flex pt-5" aria-label="search-bar">
        <label htmlFor="" className="text-2xl">filter  :</label>
        <select className="appearance-none p-2">
          <option>All</option>
          <option>Shadow</option>
          <option>Background</option>
          <option>Crowd</option>
        </select>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-48 border border-gray-300 mx-2 rounded-lg "
        />
        <button className="mx-2 p-2 bg-slate-200 rounded-lg" onClick={()=>clickToSearch()}>Search</button>
      </div>


      <div className="flex justify-center pt-48 text-2xl">
        <p>Coming Soon</p>
      </div>
    </div>
  );
}
export default Collection;
