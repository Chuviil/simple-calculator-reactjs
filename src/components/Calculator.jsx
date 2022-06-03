import React from "react";
import { CalculatorBtn } from "./CalculatorButton";

export function Calculator(props) {

  const screenRef = React.useRef();
  var result = 0;

  const changeScreen = (value) =>{
    let newScreen = screenRef.current.value;
    newScreen = newScreen + value;
    screenRef.current.value = newScreen;
  }

  const calculate = () => {
    const value = screenRef.current.value;
    result = eval(value);
    screenRef.current.value = result;
  }

  const clearScreen = () => {
    screenRef.current.value = null;
  }

  return(
    <div className="calculator">
      <input className="screen" type="text" ref={screenRef} readOnly autoComplete="off"/>
      <div className="btnContainer">
        <CalculatorBtn className="calcbutton" value={9} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={8} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={7} onClick={changeScreen}/>
        <CalculatorBtn className="functcalcs" value={"/"} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={6} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={5} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={4} onClick={changeScreen}/>
        <CalculatorBtn className="functcalcs" value={"*"} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={3} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={2} onClick={changeScreen}/>
        <CalculatorBtn className="calcbutton" value={1} onClick={changeScreen}/>
        <CalculatorBtn className="functcalcs" value={"-"} onClick={changeScreen}/>
        <button className="functcalcs" onClick={clearScreen}>AC</button>
        <CalculatorBtn className="calcbutton" value={0} onClick={changeScreen}/>
        <button className="functcalcs" onClick={calculate}>=</button>
        <CalculatorBtn className="functcalcs" value={"+"} onClick={changeScreen}/>
      </div>
    </div>
  );
}