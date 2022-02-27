import Hamburger from './Hamburger';
import HeroCarasole from './HeroCarasole';
import TopBar from './TopBar';
import Icon from '../images/logo-white-vulcan.js';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Icon />
                <Hamburger />
            </div>
            <HeroCarasole />
            <TopBar />
        </header>
    )
}

export default Header;