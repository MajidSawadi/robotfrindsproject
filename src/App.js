import React, {Component} from 'react';
 import CardList from './CardList';
 import {robots} from './robots';
 import SearchBox from './SearchBox';



 class App extends Component{

 	constructor(){

 		super()
 		this.state = {
 			robots: robots,
 			serchfield: ''


 		}
 	}

 	onSearchChange =(event)=>{

 		this.setState ({serchfield: event.target.value})
 	}

render(){
	const filteredRobots =this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.serchfield.toLowerCase())

	})


return (  
      
      <div className='tc'>
        
      <h1> RobotFriends </h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots}/>

    </div>
	);
    
    }

 	
 }

 export default App;