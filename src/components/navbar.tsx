import { Image } from 'react-bootstrap';
import shuffle from '../assets/Shuffle.png';
import previous from '../assets/Previous.png';
import play from '../assets/Play.png';
import next from '../assets/Next.png';
import repeat from '../assets/Repeat.png';

const Player =()=>{
return(
 <div className="fixed-bottom bg-container pt-1">
 <div className="row">
   <div className="player">
     <div className="row">
       <div className="playerControls mt-1">
         <div className="row">
           <a href="#">
             <Image src={shuffle} alt="shuffle" />
           </a>
           <a href="#">
             <Image src={previous} alt="previous" />
           </a>
           <a href="#">
             <Image src={play} alt="play" />
           </a>
           <a href="#">
             <Image src={next} alt="next" />
           </a>
           <a href="#">
             <Image src={repeat} alt="repeat" />
           </a>
         </div>
       </div>
     </div>
     <div className="playBar py-3">
       <div>
         <div className="progress">
           <div
             className="progress-bar"
             role="progressbar"
             aria-valuenow={0}
             aria-valuemin={0}
             aria-valuemax={100}
           ></div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
);}

export default Player;