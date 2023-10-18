import bg01 from '../../../../assets/kengan/background/bg01.jpg'
import bg03 from '../../../../assets/kengan/background/bg03.jpg'
import bg04 from '../../../../assets/kengan/background/bg04.jpg'
function Background(){
    return(
        <div>
            <p>
                Daromeon keeps forest backgrounds simple by using common techniques like short lines,
                 giving a sense of the forest without excessive detail.
            </p>
            <div className="flex">
                <img className="w-96 p-2" src={bg03} alt="" />
            </div>
            <p>
                In contrast to Hiro-san's approach of using only black lines and abundant white space for inner building scenes,
                 Daromeon employs gradients but seldom use of pure black color.
            </p>
            <div className="flex">
                <img className="w-96 p-2" src={bg04} alt="" />
            </div>
            <p>However, there are moments when Daromeon incorporates real photographs as background scenes</p>
            <div className="flex">
                <img className="w-96 p-2" src={bg01} alt="" />
            </div>
        </div>
    )
}
export default Background