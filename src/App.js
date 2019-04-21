import React, { Component } from 'react';
// import Pokecard from './Pokecard';
import './App.css';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <Pokecard id={4} name='Charmander' type='fire' exp={62} /> */}
				<Pokegame />
			</div>
		);
	}
}

export default App;
