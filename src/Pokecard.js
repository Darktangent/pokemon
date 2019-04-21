import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const POKE_APIv2 = `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padtoThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);

export default class Pokecard extends Component {
	render() {
		const { id, name, type, exp } = this.props;
		let imgSrc = `${POKE_APIv2}${padtoThree(id)}.png`;

		return (
			<div className='Pokecard' key={id}>
				<h1 className='Pokecard-title'>{name}</h1>
				<img src={imgSrc} alt={name} />
				<div className='Pokecard-data'>Type:{type}</div>
				<div className='Pokecard-data'>Exp:{exp}</div>
			</div>
		);
	}
}
