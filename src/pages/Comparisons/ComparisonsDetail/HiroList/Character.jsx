import imageFairyTailSearchService from "../../../../services/imageFairyTailSearch.service";
function Character(){
    const fCharacterImages = imageFairyTailSearchService.getAllFcharacter();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Character</h2>
            <div>
                {fCharacterImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`F character ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Character