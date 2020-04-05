import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          Name: {this.props.person.name} <br></br>
          Craft: {this.props.person.craft}
        </div>
      </div>
    );
  }
}

export default Person;
