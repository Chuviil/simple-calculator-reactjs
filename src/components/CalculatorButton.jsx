import React from "react";

export function CalculatorBtn(props) {
    const handleClick = () => {
        props.onClick(props.value);
    };

    return(
        <button className={props.className} onClick={handleClick} type="button">{props.value}</button>
    );
}