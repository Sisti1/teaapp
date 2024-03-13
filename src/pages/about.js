

import React from "react";
import OvalContainer from './OvalContainer';
const About = () => {
	return (
		<div className="container" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/03/10/05/67/240_F_310056794_qLu4lQhVTxARW45iJJg2Wy2pMYlkMfJ3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'auto', backgroundRepeat: 'no-repeat', color: 'black', padding: '20px' , height:'400px' }}>
		<div className="header">
		  <h1 >About Us</h1>
		</div>
		<div className="content">
		<OvalContainer>
                <p>
			 we are passionate about bringing you the finest selection of teas from around the world.we offer a diverse range of teas to suit every taste and occasion. 
                </p>
            </OvalContainer>
			<OvalContainer>
                <p>
				It's a community where tea enthusiasts can come together to share their love for this ancient beverage, exchange knowledge, and discover new favorites.
                </p>
            </OvalContainer>
			<OvalContainer>
                <p>
				Whether you're looking for a soothing cup of chamomile to unwind after a long day or an energizing matcha latte to kickstart your morning, we've got you covered. 
                </p>
            </OvalContainer>
		</div>
	  </div>
	  );
};

export default About;
