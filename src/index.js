import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import * as serviceWorker from './serviceWorker';
import Garage from './Garage';
import Game from './Game';

// syntaxe jsx

const myelement= (<p>Coucou voici mon html</p>)

// syntaxe sans jsx (nul)

const myelement2= React.createElement('p',{}, 'Coucou voici mon html');

// création classe voiture
// extends : on hérite de la classe component définie dans React


ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(myelement, document.getElementById('popo'));
// ReactDOM.render(<Garage/>, document.getElementById('popo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
