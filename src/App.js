import React, {useState} from 'react';
import './App.css';
import OutputField from './OutputField.js';
import ButtonClick from './ButtonClick.js';
import InputField from './InputField.js';

function App() {



 
  const [sum, setSum] = useState(0);
  const[value, setValue]= useState("");
  // it takes the change occuring in input field
  // in real time
  const changeHandler=(e)=>{
    setValue(e.target.value);
   
  }
  // this function is passed in Button as we want to run this function 
  // when button is pressed 
const addNums =()=>{
  setSum(()=>sum+Number(value));
     setValue("");
}



  return (
    <div className="App">

  <h1>  Type number in the box</h1>
  
    <InputField changeHandler={changeHandler} valuex={value} /><br/>
     <ButtonClick adding={addNums}/><br/>

     <OutputField sumValue={sum} />

    </div>
  );
}

export default App;
