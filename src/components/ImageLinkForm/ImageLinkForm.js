import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm =({onInputChange, onButtonSubmit})=> {
	return (
		<div>
			<p className='f4'>
				{'Try to Detect faces in your pictures.'}
			</p>
				<div className="center">
					<div className=" form center pa4 br3 shadow-5">
						<input className='f7 pa2 w-70 center '  type='tex' onChange={onInputChange}/>
						<button 
							className='w-30 grow f7 link ph3 pv2 dib black bg-blue'
							onClick={onButtonSubmit}
							>Detect</button>
					</div>
				</div> 
		</div>
	);
} 

export default ImageLinkForm;