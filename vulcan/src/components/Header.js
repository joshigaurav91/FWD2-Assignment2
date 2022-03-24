import Hamburger from './Hamburger';
// import "../images/logo-white-vulcan.svg"
import HeroCarasole from './HeroCarasole';
import TopBar from './TopBar';
import Icon from '../images/logo-white-vulcan.js';

function Header() {
    return (
        <header>
        {/* <img src="../images/logo-white-vulcan.svg" alt="Vulcan"/> */}
        <Icon />
        <TopBar />
        <Hamburger />
        <HeroCarasole />
        </header>
    )
}

export default Header;