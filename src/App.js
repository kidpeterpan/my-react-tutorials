import React, { Component } from "react";
import "./App.css";
import {CardList} from './components/card-list/card-list.component'

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
        },
        {
          name: 'Yorn'
          ,id: '3'
        },
        {
          name: 'Yorn'
          ,id: '4'
        },
        {
          name: 'Yorn'
          ,id: '5'
        }
      ]
    }

  }

  render() {
    return (
      <div className="App">
        <CardList>
        {
          this.state.heroes.map( hero => <h1 key={hero.id}>{hero.name}</h1>)
        }
        </CardList>
        
      </div>
    );
  }
}

export default App;
