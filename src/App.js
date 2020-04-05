import React from 'react'; 

class App extends React.Component {   
   state = {
      peopleInSpace: []
   }

   render() {
      return (
         <div>
            <ul>People in Space</ul>
            {this.state.peopleInSpace.map((person, id) =>
               <li key={id}>{person.name}</li>)}
         </div>
      )
   }

   componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
         .then(resp => resp.json())
         .then(({people}) => this.setState(
            {peopleInSpace: people}
         )
      )
   }

}

export default App; 
