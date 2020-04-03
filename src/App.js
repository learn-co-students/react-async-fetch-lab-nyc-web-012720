// create your App component here
import React from "react"

export default class App extends React.Component { 
    state = {
        astros: null
    }

    componentDidMount() { 
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(astros => {
                console.log(astros)
                this.setState({astros:astros})
            })  
    }

    renderAstros = () => {
        return this.state.astros ? this.state.astros.people.map(item => <p>{item.name}</p>) : null
    }

    render() { 
        return (
          <div>
                <span role="img" alt="astronaut">👩🏽‍🚀</span>
                <h1>ASTRONAUTS: {this.renderAstros()}</h1>
          </div>
        );
    }
}