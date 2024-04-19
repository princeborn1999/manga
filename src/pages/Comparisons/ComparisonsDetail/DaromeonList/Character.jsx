import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function Character(){
    const kMuscleImages = imageKenganSearchService.getAllKmuscle();
    const kShadowImages = imageKenganSearchService.getAllKshadow();
    return(
        <div>
            <h2>Muscle</h2>
            <div className="flex">
                {kMuscleImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Muscle ${index + 1}`} />
                ))}
            </div>
            <h2>Shadow</h2>
            <div>
                {kShadowImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Shadow ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Character