import React, { Component } from "react";

class App extends Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/users";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({ people: result.data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people ? (
          <div>loading...</div>
        ) : (
          <div>
            <ul>
              {this.state.people.map((person, i) => (
                <li key={person.first_name + person.last_name}>
                  <img src={person.avatar} /> Name: {person.first_name}{" "}
                  {person.last_name} | Email: {person.email}
                </li>
              ))}
            </ul>
            <div />
          </div>
        )}
      </div>
    );
  }
}

export default App;
