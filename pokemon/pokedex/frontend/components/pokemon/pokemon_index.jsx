import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const {pokemon} = this.props;
    // Possibly add route path
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <ul>
        {pokemonItems}
      </ul>
    );
  }
}

export default PokemonIndex;
