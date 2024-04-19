import draft01 from '../../../../assets/kengan/draft/draft01.jpg'
import draft02 from '../../../../assets/kengan/draft/draft02.jpg'
import draft03 from '../../../../assets/kengan/draft/draft03.jpg'

function RoughDraft(){
    return(
        <div>
            <p> In the rough version, there is not a significant difference between the formal and draft work. 
                However, there are two distinctive features: first,
                the structural lines closely resemble those in the rough draft, and second, 
                the addition of shadows and gradients is seldom seen in the rough draft.</p>
            <div className="flex">
                <img className="w-96 p-2" src={draft01} alt="" />
            </div>
            <div className="flex">
                <img className="w-96 p-2" src={draft02} alt="" />
            </div>
            <div className="flex">
                <img className="w-96 p-2" src={draft03} alt="" />
            </div>
        </div>
    )
}
export default RoughDraft