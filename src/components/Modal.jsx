import { useState, useEffect } from "react"

function Modal(){
    const [ modal, setModal ] = useState('DevelopLog')
    const DevelopLog = () => {
        return(
            <div className="z-50 flex w-1/3 h-2/3 fixed p-5 bg-slate-900 text-white shadow-lg">
                <div>
                    <h2>Develop Log</h2>
                    <div className="p-5 border-2 border-white"> 
                        Comparisons ver1.0.0
                    </div>
                    <button className="border-white border-2 text-white px-2" onClick={()=>setModal('')}>X</button>
                </div>
            </div>
        )
    }   
    const AuthorInfo = () => {
        return(
            <div className="w-1/3 h-2/3 fixed bg-slate-900 text-white ">
                <h2>AuthorInfo</h2>
            </div>
        )
    }
    const QA = () => {
        return(
            <div className="w-1/3 h-2/3 fixed bg-slate-900 text-white">
                <h2>QA</h2>
            </div>
        )
    }
    return(
        <div className="fixed w-full h-full z-30 flex justify-center items-center">
            {
                modal==='DevelopLog' && <DevelopLog /> ||
                modal === 'AuthorInfo' && <AuthorInfo /> ||
                modal === 'QA' && <QA /> 
            }
            <div className="w-full h-full bg-black opacity-50"> </div>
        </div>
    )
}
export default Modal