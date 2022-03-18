import { Link } from 'react-router-dom';
import email from '../images/elusive-mail-circled-white.svg';
import call from '../images/elusive-phone-circled-white.svg'

function TopBar() {
    const header1 = 'WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.';
    return(
        <div className="topbar-cantainer">
            <div className="topbar-1">
                <div className="topbar-left">
                    <Link to="/">INSTALL MAP</Link>
                    <Link to="/">PRODUCT LITERATURE</Link>
                </div>
                <div className="topbar-right">
                    <a href="#0"><img src={call} alt='phone logo'/><span>+1 712-642-2755</span></a>
                    <a href="#0"><img src={email} alt='contact logo'/><span>CONTACT US</span></a>
                </div>
            </div>
            <div className="topbar-2">
                {/* <div className="topbar-2-container"> */}
                    <h1>{header1}</h1>
                    <Link to="/"> VIEW PRODUCTS</Link>
                    <Link to="/"> VIEW SERVICES</Link>
                {/* </div> */}
            </div>
        </div>
        
    )
}

export default TopBar;