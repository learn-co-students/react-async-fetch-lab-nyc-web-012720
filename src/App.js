import React from 'react'

export default class App extends React.Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(astronauts => console.log(astronauts))
    }

    render() {
        return (
            <p>Hi there</p>
        )
    }

}
