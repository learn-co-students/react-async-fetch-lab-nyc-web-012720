import React from 'react'

export default class App extends React.Component {

    state = {
        list: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(list => this.setState({ list: list}))
    }

    render () {
        return (
            <div></div>
        )
    }
}