import imageOneSearchService from "../../../../services/imageOneSearch.service";
function Backgroud(){
    const oBackgroundImages = imageOneSearchService.getAllObackground();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Backgroud</h2>
            <div>
                {oBackgroundImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`O background ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Backgroud