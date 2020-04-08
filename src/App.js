import React, {Component} from "react"

export default class App extends Component {

    state = {
        object: {}
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(json => this.setState({object: json}))
    }

    render() {
        return (
            <div></div>
        )
    }

}
