import { Link } from 'react-router-dom';
import email from '../images/elusive-mail-circled-white.svg';
import call from '../images/elusive-phone-circled-white.svg';
import facebook from '../images/icon-white-facebook.png';
import linkedin from '../images/icon-white-linkedin.png';
import Icon from '../images/logo-white-vulcan.js';
function Footer() {
    return (
        <footer>
            <Icon className="logo"/>
            <ul className="social-media">
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={linkedin} alt="linkedin"/></li>
                <li><img className="contact" src={call} alt='phone logo'/>+1 712-642-2755</li>
                <li><Link to="/"><img className="contact" src={email} alt='contact logo'/>CONTACT US</Link></li>
            </ul>
            <p>COPYRIGHT 2017. ALL rights reserved.</p>
        </footer>
    )
}

export default Footer;