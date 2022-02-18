import { Link } from 'react-router-dom';
import call from '../images/call_contact_icon.png';

function TopBar() {
    const header1 = 'WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTE WATER SCREENS. ENOUGH SAID.';
    return(
        <div className="topbar-cantainer">
            <div className="topbar-1">
            <ul>
                <li><Link to="/">INSTALL MAP</Link></li>
                <li><Link to="/">PRODUCT LITERATURE</Link></li>
                <li>+1 712-642-2755</li>
                <li><Link to="/"><img src={call} alt='contact logo'/>CONTACT US</Link></li>
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