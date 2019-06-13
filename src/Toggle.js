import React from 'react';


// qd appui boutton toggle like du com sinon dislike

class Toggle extends React.Component{

    constructor (props){
        super (props);
        this.state={like:false};
    // nous allons lier la fonction handleClick avec le 'this' pour ne pas avoir à le répéter sans cesse
    this.handleClick=this.handleClick.bind(this);
    
    }
handleClick(){
    this.setState(state=>({like:!state.like}))
}

    render(){
        return(
            <button onClick={this.handleClick}>
            {this.state.like ? 'Like :)' : 'Dislike :('}
            </button>
        );
    }
}

export default Toggle;