import TopNavComponent from "../components/TopNav";
import { useState } from "react";
function AddCollection(){
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
      };
    const historyList = []
    return(
        <div>
            <TopNavComponent />
            <div className="w-full h-full p-5">
                <h1>Upload Image</h1>
                <div className="my-2">
                    <input type="file" onChange={handleImageSelect} />
                </div>
                <div className="flex my-2">
                    <p className="p-2">Name:</p>
                    <input type="text"className="p-2 rounded"/>
                </div>
                <button className="bg-green-400 m-2 p-2">Sumbit</button>
                <button className="bg-red-400 m-2 p-2">Cancel</button>
                <div>
                    <p className="text-green-800">upload success!</p>
                    <p className="text-red-600">upload fail!</p>
                </div>
                <div>
                    { historyList } 
                    {/* map 看歷程有哪些 */}
                </div>
            </div>
        </div>
    )
}
export default AddCollection