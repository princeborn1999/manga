import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function Vibe(){
    const kVibeImages = imageKenganSearchService.getAllKvibe();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Danger</h2>
            <div>
                {kVibeImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Vibe ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Vibe