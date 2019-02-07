import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

 
    
    state = {
      pokemon: [],
      filtered: [],
      value: ' '
    }
  
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(res => this.setState({
        pokemon: res
        })
      )
  } //setting attribute in fetch before setting state


  // componentWillMount(){
  //   this.setState({
  //     pokemon,
  //     filtered: pokemon
  //   })
  // }
  
 
  

  searching = (data) => {
    this.setState({
      value: data.value
    })
   
    this.state.pokemon.map(poke => {
      var name = []
     name.push(poke.name)
     name.includes(this.state.value) ? 
     this.setState({ 
      filtered: [this.state.pokemon.filter(pok => pok.name === this.state.value)]
     })
      :
      this.setState({ 
        filtered: this.state.pokemon
       })
    })  
    
  }




  render() {
    console.log(this.state.filtered)
    
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, data) => this.searching(data), 500)} showNoResults={false} />
        <br />
       {this.state.filtered.length > 0 ? 
        <PokemonCollection poke={this.state.filtered} handleClick={this.changeToBack}/> 
       :
        <PokemonCollection poke={this.state.pokemon} handleClick={this.changeToBack}/> 
      } 
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
