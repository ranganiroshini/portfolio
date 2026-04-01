import './intro.css';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
        <div className="cont" id='intro'> 
            <div className="intro">
                <div className="name"> ROSHINI RANGANI </div>
                <div className="titles">VTU '23 | Webster '26</div>
                <div className="one">
                <Typewriter 
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("DATA-DRIVEN DECISION MAKER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("BUSINESS INTELLIGENCE")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("ANALYTICS ENTHUSIAST")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("AI & MACHINE LEARNING SPECIALIST")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("BIG DATA ARCHITECT")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
                </div>
                <p className="resume" >
                   <a href='https://drive.google.com/file/d/1vTq0ekOL5CuO91NWbwvjThe4xwyV3X5T/view?usp=drive_link'> Resume</a>
                </p>
            </div>
            <div className="ima">
            </div>
        </div>
     );
}
 
export default Intro;