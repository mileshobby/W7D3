import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const {pokemon} = this.props;
    return (
      <ul>
        {pokemon.map(poke=>
          <li key={poke.id}>
            {poke.name}

            <img src={poke.image_url} height="40" width="40"></img>
          </li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
