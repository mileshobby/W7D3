import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   // this.props.requestPokemonDetail(this.props.match.params.pokemonId)
  // }

  //componentWillReceiveProps(newProps){}

  render(){
    const {type, name, attack, defense, moves, items} = this.props.pokemonDetail;
    return (
      <ul>
        <li>{name}</li>
        <li>Type: {type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves}</li>
      </ul>
    );
  }

}
