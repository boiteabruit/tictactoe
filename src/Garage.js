import React from"react";
import Voiture from './Voiture';

class Garage extends React.Component{

// Attributs



// Methods
render(){
        const def="grise";
        const voit = {color:"grise", brand:"Peugeot", owner:"none", id:"iddddd"}
    // On ouvre les parenthèses pour injecter de l'html via l'annotation JSX - JavaScript Xml
    // C'est ici que l'on définit le contenu HTML affichable à l'appel de la balise >/Garage> dans l'index.js
    return(

    <div>
        <h1> Quelles sont les voitures que j'ai dans mon garage ?</h1>
        <Voiture color='verte' brand="Mustang" owner="Pablo" id="54645"/><br/>
        <Voiture color='rouge' brand="Mustang" owner="Pablo" id="54645"/><br/>
        <Voiture color='bleue' brand="Mustang" owner="Pablo" id="54645"/><br/>
        <Voiture color='jaune' brand="Mustang" owner="Pablo" id="54645"/><br/>

        

        <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/>


    </div>
    
    );
}

}

export default Garage;