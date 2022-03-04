import manufacturing from '../images/bg-section-about-us.jpg'


function About() {
    return (
        <div>
            <div className="about-container">
                {/* <img src={manufacturing} alt="manufactiring facility" className="manufacturing-img"/> */}
                <div className="about-content">
                    <h3>DELIVERING CLEAN, SAFE WATER SINCE 1975. REFRESHING INDEED.</h3>
                    <p>Vulcan wastewater screening equipment has played a vital role in protecting the water supply of more than 900 cities and communities througout the world.</p>
                    <a className="about-btn" href="">ABOUT US</a>
                </div>
            </div>
        </div>
    )
}

export default About;