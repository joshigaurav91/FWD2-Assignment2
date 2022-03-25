import map from '../images/map.jpg'
import waveBlueLight from '../images/wave-blue-light.png'

function UserEngage() {
    return (
        <div>
            <div className="user-engage-container">
                <div className="map">
                    <img src={map} alt="map of the United States" />
                    <div className="map-content">
                        <h3>INSTALLED IN A CITY NEAR YOU</h3>
                        <a href="#main-nav" class="btn-menu-smscreen" id="btn-menu">FIND A VULCAN INSTALL</a>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-color-box">
                        <h3>READY TO SPEC VULCAN FOR YOUR PROJECT?</h3>
                        <a href="#main-nav" class="btn-menu-smscreen" id="btn-menu">CONTACT US</a>
                    </div>
                </div>
                <img className="wave-below-userengage" src={waveBlueLight} alt="wave" />
            </div>
            
        </div>
    )
}

export default UserEngage;