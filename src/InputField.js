import React from 'react';

const InputField = ({changeHandler,valuex})=>{
	return(
		<div>


<input id="inputt" type="text" name="" value={valuex} onChange={changeHandler}/>
		</div>


		)
}

export default InputField;