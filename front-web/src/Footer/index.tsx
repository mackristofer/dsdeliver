import "./styles.css";
import {ReactComponent as YouTubeIcon} from './Youtube.svg';
import {ReactComponent as InstagramIcon} from './Instagram.svg';
import {ReactComponent as LinkedinIcon} from './Linkedin.svg';
function Footer(){
    return(
     <footer className="main-footer">
         App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
         <div className="footer-icons">
        <a href="#" target="_new">
            <YouTubeIcon />
            </a>
        <a href="#" target="_new">
            <InstagramIcon />
            </a>
        <a href="#" target="_new">
            <LinkedinIcon />
            </a>
         </div>
     </footer>
    )


}

export default Footer;