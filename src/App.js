import React from 'react';

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
        .then(resp => resp.json())
        .then(astro => {
            this.setState({
                people: astro.people
            })
        } )
    }

    render() {
        return(
            <div>
                <h1> </h1>  
                hey
                <div>
                    {this.state.people.map(x => <p>{x.name}</p>)}
                </div>
            </div>
        )
    }


}

export default App
