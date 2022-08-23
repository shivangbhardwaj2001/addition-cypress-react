import React from 'react';

const OutputField = (props)=>{
	return(
		<div>
   
   <textarea type="textField"  id="text" value={props.sumValue}></textarea><br/>

		</div>


		)
}

export default OutputField;