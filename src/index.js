import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import * as serviceWorker from './serviceWorker';
import Garage from './Garage';
import Game from './Game';
import Clock from './Clock';
import Toggle from './Toggle';
import Mailbox from './Mailbox';
import List from './List';


// syntaxe jsx

// const myelement= (<p>Coucou voici mon html</p>)


// function Tick2(){
//     const element=(
//         <div>
//             <h1>Heure locale</h1>
//             <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('popo2'));
// }

// setInterval(Tick2, 1000);



// syntaxe sans jsx (nul)

// const myelement2= React.createElement('p',{}, 'Coucou voici mon html');

// création classe voiture
// extends : on hérite de la classe component définie dans React
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Toggle />, document.getElementById('popo2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock/>, document.getElementById('popo'));

const numbers=['5', '4', '3','2','1']

ReactDOM.render(<List numbers={numbers}/>, document.getElementById('popo3'));


const message =['COUCOU CA FARTE', 'CA FARTE ET TOI', 'JAI FAIM'];

ReactDOM.render(<Mailbox  messagesnonlus={message}/>, document.getElementById('root3'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(myelement, document.getElementById('popo'));
// ReactDOM.render(<Garage/>, document.getElementById('popo'));

// setInterval(Tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
