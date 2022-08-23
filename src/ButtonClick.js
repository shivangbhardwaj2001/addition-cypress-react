import React from 'react';

const ButtonClick = ({adding})=>{
	return(
		<div>

<button type="button" id="add" onClick={()=>adding()}>Add</button>
		</div>


		)
}

export default ButtonClick;