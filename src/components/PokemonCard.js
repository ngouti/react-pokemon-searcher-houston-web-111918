import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    front: true
  }

  changeToBack = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    
    return (
      <Card >
        <div onClick={this.changeToBack} >
        {this.state.front === true ? <div className="image"> <img alt="oh no!" src={this.props.sprites["front"]}/></div> : <div className="image"> <img alt="oh no!" src={this.props.sprites["back"]}/></div>}
          {/* <div className="image"> <img alt="oh no!" src={this.props.image}/></div> */}
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
