import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [color,setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY > 0){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return (
        
        <div className={color? "header header-bg": "header"}>
            <div className="navbar" id='navbar'>
                <div className="about-title navitem">ROSHINI</div>
                <ul className="ul-list">
                <Link className="navitem" to="about-skills" spy={true} smooth={true} offset={-120} duration={1200} > About</Link>
                <Link
  className="navitem"
  to="about-skills"
  spy={true}
  smooth={true}
  offset={-120}
  duration={1200}
>
  Skills
</Link>

                <Link className="navitem" to="project" spy={true} smooth={true} offset={-250} duration={1900} > Projects</Link>
                <Link className="navitem" to="certifications" spy={true} smooth={true} offset={-100} duration={1200} > Certifications </Link>

                <Link className="navitem" to="contact" spy={true} smooth={true}  duration={1900} > Contact</Link>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;