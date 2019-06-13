import React from 'react';

class Clock extends React.Component{
    // 1ere fonct qui s'exécute pour CREER le composant ==> elle le construit
    constructor(props){
        super(props);
        this.state={
            date : new Date()
        }
    }

    // la fonct qui affiche l'HTML sur l'écran, to render = afficher en ang
    render(){
        return(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }


// une fois affichage (render) effectué, fonction suivante d'exécute direct
componentDiMount(){
    this.timerID=setInterval(()=>this.tictac(),1000)
}

// voici une fonction qui permet de mettre à jour la adte dnas l'état
// qui dit mise à jour de l'état dit :setState
tictac(){
    this.setState({
        date: new Date()
    });
}

// juste avant de finir le lifecycle et de quiter le composant, nous effaçons le contenu de l'intervalle de temps

componentWillMount(){
    clearInterval(this.timerID);
}

}
export default Clock;