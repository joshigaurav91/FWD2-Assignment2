import Hamburger from './Hamburger';
import HeroCarasole from './HeroCarasole';
import TopBar from './TopBar';
import Icon from '../images/logo-white-vulcan.js';

function Header() {
    return (
        <header>
        <Icon />
        <TopBar />
        <Hamburger />
        <HeroCarasole />
        </header>
    )
}

export default Header;