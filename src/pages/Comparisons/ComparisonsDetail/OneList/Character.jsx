import imageOneSearchService from "../../../../services/imageOneSearch.service";
function Character(){
    const oCharacterImages = imageOneSearchService.getAllOcharacter();
    const oShadowImages = imageOneSearchService.getAllOshadow();

    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Character</h2>
            <div>
                {oCharacterImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`O Character ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Shadow</h2>
            <div>
                {oShadowImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`O Shadow ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Character