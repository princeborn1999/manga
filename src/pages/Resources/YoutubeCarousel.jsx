import draft01 from '../../assets/kengan/draft/draft01.jpg'
import draft02 from '../../assets/kengan/draft/draft02.jpg'
import draft03 from '../../assets/kengan/draft/draft03.jpg'
function YoutubeCarousel(){
  
  return (
    <div className="span-x flex h-96">
      <div className="snap-center">
        <img src={draft01} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft01} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft01} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft02} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft02} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft02} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft03} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft03} alt="" />
      </div>
      <div className="snap-center">
        <img src={draft03} alt="" />
      </div>
    </div>
  );
}
export default YoutubeCarousel