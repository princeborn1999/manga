import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function Action(){
    const kActionImages = imageKenganSearchService.getAllKaction();
    const kDodgeImages = imageKenganSearchService.getAllKdodge();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Action</h2>
            <div>
                {kActionImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Action ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Dodge</h2>
            <div>
                {kDodgeImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Dodge ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Action