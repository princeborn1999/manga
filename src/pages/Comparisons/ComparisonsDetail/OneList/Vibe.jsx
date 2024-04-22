import imageOneSearchService from "../../../../services/imageOneSearch.service";
function Vibe(){
    const oDangerImages = imageOneSearchService.getAllOdanger();

    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Danger</h2>
            <div>
                {oDangerImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`O Vibe ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Vibe