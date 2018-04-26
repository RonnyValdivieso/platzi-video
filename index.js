import React from 'react';				// Permite crear componentes
import { render } from 'react-dom';	// Permite renderizar componentes
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

// console.log('Hola mundo!');

const app = document.getElementById('app')
// const holaMundo = <h1>Hola mundo!</h1>;

//	ReactDOM.render(qué voy a renderizar, en donde lo haré);
render(<Playlist data={data}/>, app);