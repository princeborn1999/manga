import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function RoughDraft(){
    const kRoughDraftImages = imageKenganSearchService.getAllKrough();
    return(
        <div>
            <h2>RoughDraft</h2>
            <div>
                {kRoughDraftImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K RoughDraft ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default RoughDraft