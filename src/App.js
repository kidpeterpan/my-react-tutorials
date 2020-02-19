import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      heroes: [
        {
          name: 'Grakk'
          ,id: '0'
        },
        {
          name: 'Moren'
          ,id: '1'
        },
        {
          name: 'Yorn'
          ,id: '2'
        }
      ]
    }

  }

  render() {
    return (
      <div className="App">
        {
          this.state.heroes.map( hero => <h1 key={hero.id}>{hero.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
