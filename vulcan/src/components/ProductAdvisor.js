import React from 'react'
import MACHINE1 from "../images/machine-01-912x834.png"
import MACHINE2 from "../images/machine-02-912x834.png"
import MACHINE3 from "../images/machine-03-912x834.png"
import MACHINE4 from "../images/machine-04-912x834.png"

function ProductAdvisor() {
  return (
      
    <div className='customize-order-wrapper'>
        <h2>CUSTOMIZED PER ORDER</h2>
        <p>Just as no two treatment plants are the same, no two of our screening, 
            grit handling or sludge thickening products are either. We'll help determine exactly what you need.</p>
        <div className='machine-cards-container'>
            <div className='machine-card'>
            <img src={MACHINE1} alt="screening-machine" className='machine-img'></img>
            <h2>SCREENING</h2>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE2} alt="screening-machine" className='machine-img'></img>
            <h2>SCREENINGS HANDLING</h2>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE3} alt="screening-machine" className='machine-img'></img>
            <h2>GRIT HANDLING</h2>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE4} alt="screening-machine" className='machine-img'></img>
            <h2>SLUDGE HANDLING</h2>
            <a href="#">View Selection</a>
            </div>
        </div>

    </div>
  )
}

export default ProductAdvisor