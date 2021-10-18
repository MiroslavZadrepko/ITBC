import React from "react";

const Ukupno = (props) => {
    console.log(props);
    return (<p>Укупно пића: {props.pice1 + props.pice2 + props.pice3}</p>)
    
}
export default Ukupno