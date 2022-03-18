import Hamburger from './Hamburger';
import HeroCarasole from './HeroCarasole';
import TopBar from './TopBar';
import Icon from '../images/logo-white-vulcan.js';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="nav-top">
                    <div className="logo-container logo-container-header">
                    <Icon /> 
                    </div>
                    <Hamburger />
                </div>
                <TopBar />
            </div>
            <HeroCarasole />
        </header>
    )
}

export default Header;