import map from '../images/map.jpg'

function UserEngage() {
    return (
        <div>
            <div className="map">
                <img src={map} alt="map of the United States" />
                <div className="map-content">
                    <h3>INSTALLED IN A CITY NEAR YOU</h3>
                    <a href="#main-nav" class="btn-menu-smscreen" id="btn-menu">FIND A VULCAN INSTALL</a>
                </div>
            </div>
            <div className="contact">
                <div>
                    <h3>READY TO SPEC VULCAN FOR YOUR PROJECT?</h3>
                    <a href="#main-nav" class="btn-menu-smscreen" id="btn-menu">CONTACT US</a>
                </div>
            </div>
        </div>
    )
}

export default UserEngage;