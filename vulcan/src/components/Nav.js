import { NavLink } from 'react-router-dom';

function Nav() {

    function closeNav(){
        document.body.classList.remove('show');
    }

    return (
        <nav onClick={closeNav}>
        <ul>
            <li><NavLink to="/">ABOUT</NavLink></li>
            <li><NavLink to="/">PRODUCTS</NavLink></li>
            <li><NavLink to="/">SERVICES</NavLink></li>
            <li><NavLink to="/">PARTS</NavLink></li>
            <li><NavLink to="/">NEWS</NavLink></li>
            <li><NavLink to="/">CONTACT</NavLink></li>
        </ul>
        </nav>
    )
}

export default Nav;