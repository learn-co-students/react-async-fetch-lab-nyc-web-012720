import React from "react";
import Person from "./Person";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      peopleInSpace: [],
    };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          peopleInSpace: data.people,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.peopleInSpace.map((person, index) => (
            <Person person={person} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
