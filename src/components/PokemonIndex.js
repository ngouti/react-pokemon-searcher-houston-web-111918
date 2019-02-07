import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

 
    
    state = {
      pokemon: [],
      searchValue: ''
    }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(res => this.setState({
        pokemon: res
        })
      )
  } //setting attribute in fetch before setting state

  
  searching= (date) => {
    this.setState({
      searchValue: date.value
    })
  }

  addPoke = (poke) => {
    this.setState({
      pokemon: [...this.state.pokemon, poke]
    })
  }

  render() {
    let filteredPoke = this.state.pokemon.filter(poke => poke.name.includes(this.state.searchValue))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, data) => this.searching(data), 500)} showNoResults={false} />
        <br />
       
        <PokemonCollection poke={filteredPoke} handleClick={this.changeToBack}/> 
       
        <br />
        <PokemonForm addPoke={this.addPoke}/>
      </div>
    )
  }
}

export default PokemonPage
