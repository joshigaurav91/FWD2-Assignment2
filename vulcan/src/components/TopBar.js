import { Link } from 'react-router-dom';
import call from '../images/call_contact_icon.svg';
import email from '../images/circle_email_icon.svg'

function TopBar() {
    const header1 = 'WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTE WATER SCREENS. ENOUGH SAID.';
    return(
        <div className="topbar-cantainer">
            <div className="topbar-1">
            <ul>
                <li><Link to="/">INSTALL MAP</Link></li>
                <li><Link to="/">PRODUCT LITERATURE</Link></li>
                <li><img src={call} alt='phone logo'/>+1 712-642-2755</li>
                <li><Link to="/"><img src={email} alt='contact logo'/>CONTACT US</Link></li>
            </ul>
            </div>
            <div className="topbar-2">
                <h1>{header1}</h1>
                <Link to="/"> VIEW PRODUCTS</Link>
                <Link to="/"> VIEW SERVICES</Link>
            </div>
        </div>
        
    )
}

export default TopBar;