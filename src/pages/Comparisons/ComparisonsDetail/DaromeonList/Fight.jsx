import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function Fight(){
    const kFightImages = imageKenganSearchService.getAllKfight();
    const kInjuredImages = imageKenganSearchService.getAllKinjured();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Fight</h2>
            <div>
                {kFightImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Fight ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Injured</h2>
            <div>
                {kInjuredImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Injured ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Fight