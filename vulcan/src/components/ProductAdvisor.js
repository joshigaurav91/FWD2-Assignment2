import React from 'react'
import MACHINE1 from "../images/machine-01-912x834.png"
import MACHINE2 from "../images/machine-02-912x834.png"
import MACHINE3 from "../images/machine-03-912x834.png"
import MACHINE4 from "../images/machine-04-912x834.png"
import WAVE_TOP from "../images/wave-white.png"
import WAVE_BOTTOM from "../images/wave-blue-dark.png"

function ProductAdvisor() {
  return (
      
    <div className='customize-order-wrapper'>
      <div className='wave-top'>
              <img src={WAVE_TOP} alt="wave"></img>                  
            </div>
      <section className='productAdvisor'>
        <div className='text'>
        <h2 id="header-productAdvisor">CUSTOMIZED PER ORDER</h2>
        <p className='headline'>Just as no two treatment plants are the same, no two of our screening, 
            grit handling or sludge thickening products are either. We'll help determine exactly what you need.</p>
        </div>
        <div className='machine-cards-container'>
            <div className='machine-card'>
            <img src={MACHINE1} alt="screening-machine" className='machine-img'></img>
            <a href="#" class="h2-header"><h2>SCREENING</h2></a>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE2} alt="screening-machine" className='machine-img'></img>
            <a href="#" class="h2-header"><h2>SCREENINGS HANDLING</h2></a>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE3} alt="screening-machine" className='machine-img'></img>
            <a href="#" class="h2-header"><h2>GRIT HANDLING</h2></a>
            <a href="#">View Selection</a>
            </div>
            <div className='machine-card'>
            <img src={MACHINE4} alt="screening-machine" className='machine-img'></img>
            <a href="#" class="h2-header"><h2>SLUDGE HANDLING</h2></a>
            <a href="#">View Selection</a>
            </div>           
        </div>
        <div className='machine-cards-container2'>
            <hr></hr>
            <div className='machine-card'>
            <img src={MACHINE1} alt="screening-machine" className='machine-img'></img>
            <a href="" class="h2-headersmall">SCREENING</a>            
            <hr></hr>
            </div>
            <div className='machine-card'>
            <img src={MACHINE2} alt="screening-machine" className='machine-img'></img>            
            <a href="" class="h2-headersmall">SCREENINGS HANDLING</a>          
            <hr></hr>
            </div>
            <div className='machine-card'>
            <img src={MACHINE3} alt="screening-machine" className='machine-img'></img>            
            <a href="" class="h2-headersmall">GRIT HANDLING</a>          
            <hr></hr>
            </div>
            <div className='machine-card'>
            <img src={MACHINE4} alt="screening-machine" className='machine-img'></img>            
            <a href="" class="h2-headersmall">SLUDGE HANDLING</a>           
            <hr></hr>
            </div>           
        </div>
        </section>
        <div className='wave-bottom'>
              <img src={WAVE_BOTTOM} alt="wave"></img>                  
            </div>
    </div>
  )
}

export default ProductAdvisor