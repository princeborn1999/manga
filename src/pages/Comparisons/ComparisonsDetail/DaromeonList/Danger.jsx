import danger01 from '../../../../assets/kengan/danger/danger01.jpg'
import danger02 from '../../../../assets/kengan/danger/danger02.jpg'
function Danger(){
    return(
        <div>
            <p>Daromeon oftenly uses smoke effects to give characters a unique and super-strong aura.</p>
            <div className="flex">
                <img className="w-96 p-2" src={danger02} alt="" />
            </div>
            <div className="flex">
                <img className="w-72 p-2" src={danger01} alt="" />
            </div>
        </div>
    )
}
export default Danger