import imageOneSearchService from "../../../../services/imageOneSearch.service";
function Fight(){
    const oFightImages = imageOneSearchService.getAllOfight();
    const oInjuredImages = imageOneSearchService.getAllOinjured();

    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Fight</h2>
            <div>
                {oFightImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F fight ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Injured</h2>
            <div>
                {oInjuredImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F fight ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Fight