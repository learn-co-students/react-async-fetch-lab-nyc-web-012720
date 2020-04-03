import React from 'react';

class App extends React.Component{

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json)
        .then(astros => {
        return astros
        })
        .catch(err=> console.log(err))
    }

    render() {
        return (
            <div>Hi</div>
        )
    }
}

export default App;