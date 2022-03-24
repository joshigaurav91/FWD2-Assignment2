import Hamburger from './Hamburger';
// import "../images/logo-white-vulcan.svg"
import HeroCarasole from './HeroCarasole';
import TopBar from './TopBar';
import Icon from '../images/logo-white-vulcan.js';
//import "../images/logo-white-vulcan.svg"

function Header() {
    return (
        <header>
        {/* <img src="../images/logo-white-vulcan.svg" alt="Vulcan"/> */}
        <Icon />
        <TopBar />
        {/* <img src="../images/logo-white-vulcan.svg" alt="Vulcan"/> */}
        <Hamburger />
        <HeroCarasole />
        </header>
    )
}

export default Header;