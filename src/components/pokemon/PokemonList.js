import React, { Component } from 'react'
import PokemonCard from "./PokemonCard";
import axios from 'axios';

export default class PokemonList extends Component {
    state={
        url : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
        pokemon : null
    };

    async componentDidMount() {
        const res =  await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results']});
    }

    
    render() {
        return (
            <React.Fragment>
            {this.state.pokemon ? (
                
                <div className="row">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name}></PokemonCard>
                ))}
                
            </div>) : (<h1>Loading pokemon</h1>)}

        </React.Fragment>
        
        )
    }
}
