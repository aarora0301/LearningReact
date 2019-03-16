import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'aarshi', age: 28},
            {name: 'anu', age: 27}
        ]
    }

    switchNameHandler=()=>{
    console.log("clicked");
    }

    render() {
        return (
            <div className="App">
                <h1>Hello React</h1>
                <p>This is really Working!!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
            </div>
        );
    }
}

export default App;
