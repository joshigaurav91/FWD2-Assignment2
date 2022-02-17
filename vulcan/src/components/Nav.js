
function Nav() {

    function closeNav(){
        document.body.classList.remove('show');
    }

    return (
        <nav onClick={closeNav}>
        <ul>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">PRODUCTS</a></li>
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">PARTS</a></li>
            <li><a href="/">NEWS</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
        </nav>
    )
}

export default Nav;