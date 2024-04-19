import crowd01 from '../../../../assets/kengan/crowd/crowd01.jpg'
import crowd02 from '../../../../assets/kengan/crowd/crowd02.jpg'
function Crowd(){
    return(
        <div>
            <p>When drawing a crowd, the emphasis is often on the upper half of the characters with a gray color
               and minimal additional detail.</p>
            <div className="flex">
                <img className="h-48 p-2" src={crowd01} alt="" />
            </div>
            <div className="flex">
                <img className="h-34 p-2" src={crowd02} alt="" />
            </div>
        </div>
    )
}
export default Crowd