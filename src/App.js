import React, { Component } from "react";
import "./App.css";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }

  }

  componentDidMount(){
    /** async */
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {

    const { monsters,  searchValue} = this.state;
    const searchFiltered = monsters.filter(monster => 
                           monster.name.toLowerCase().includes(searchValue.toLowerCase())
                           );
    
    return (
      
      <div className="App">
        <SearchBox  
          placeholder='search monsters'
          handleChange={ e => this.setState( {searchValue : e.target.value}) } 
        />
        <CardList cardInfo={searchFiltered}/>
      </div>
    );
  }
}

export default App;
