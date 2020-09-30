import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

const Logo =()=> {
	return (
		<div className='ma4 mt0'>
				<Tilt className="Tilt br4 shadow-2" options={{max : 100} } style={{height: 200, width: 150} } >
 					<div className="Tilt-inner pa4">
 						<img style={{paddingBottom:'5px'}} alt='logo' src={face}/>
 					</div>
				</Tilt>

		</div>
	);
}

export default Logo;