import { Link } from 'react-router-dom';
import call from '../images/call_contact_icon.svg';
import email from '../images/circle_email_icon.svg';
function Footer() {
    return (
        <footer>
            <ul>
                <li><img src={call} alt='phone logo'/>+1 712-642-2755</li>
                <li><Link to="/"><img src={email} alt='contact logo'/>CONTACT US</Link></li>
            </ul>
            <p>COPYRIGHT 2017. ALL rights reserved.</p>
        </footer>
    )
}

export default Footer;