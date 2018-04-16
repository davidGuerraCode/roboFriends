import React, { Component } from 'react'
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox'
import { robots } from '../../robots';

class App extends Component {
  constructor() {
    super()
    // Se define el estado del componente.
    this.state = {
      robots,
      searchfield: ''
    }
  }
  
  // Cuándo se crean eventos personalizados se deben usar 'arrow function'.
  onSearchChange = (event) => {
    // Se usa 'setState' para cambiar el estado del componente.
    this.setState({ searchfield: event.target.value })
  }
  
  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange= { this.onSearchChange }/>
        <CardList robots={ filterRobots } />
      </div>
    );
  }
}

export default App;
