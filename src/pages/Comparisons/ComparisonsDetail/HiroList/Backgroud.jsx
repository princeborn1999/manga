import imageFairyTailSearchService from "../../../../services/imageFairyTailSearch.service";
function Background(){
    const fBackgroundImages = imageFairyTailSearchService.getAllFbackground();
    const fCrowdImages = imageFairyTailSearchService.getAllFcrowd();

    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Background</h2>
            <div>
                {fBackgroundImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F background ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Crowd</h2>
            <div>
                {fCrowdImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F Crowd ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Background