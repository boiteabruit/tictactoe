import React from 'react';

function Liste(props){
    // numbers contient tableau chiffre envoyé par le père
    const numbers= props.numbers;
    const listItems=numbers.map((numbers)=>
    <li key ={numbers.toString()}> 
    {numbers}
    </li>
    );
    return(
        <ul>{listItems}</ul>
    )
}

export default Liste;