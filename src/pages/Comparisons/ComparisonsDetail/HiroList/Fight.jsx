import imageFairyTailSearchService from "../../../../services/imageFairyTailSearch.service";
function Fight(){
    const fFightImages = imageFairyTailSearchService.getAllFfight();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Fight</h2>
            <div>
                {fFightImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F fight ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Fight