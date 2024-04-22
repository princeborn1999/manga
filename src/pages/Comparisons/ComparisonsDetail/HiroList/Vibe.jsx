import imageFairyTailSearchService from "../../../../services/imageFairyTailSearch.service";
function Vibe(){
    const fDangerImages = imageFairyTailSearchService.getAllFdanger();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Vibe</h2>
            <div>
                {fDangerImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`f Vibe ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Vibe