import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {

        persons: [
            {name: 'aarshi', age: 28},
            {name: 'anu', age: 27}
        ],

        showPersons: false
    }

    /**
     * since react renders everything inside render block, initially it only shows button (Toggle person)
     * clicking the button will execute code inside togglePersonHandler which will reset value of showPersons
     * and hence when it renders second time it shows all the data(person) inside the state.
     */
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {


        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age}/>
                    })
                    }
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hello React</h1>
                <p>This is really Working!!</p>
                <button onClick={this.togglePersonsHandler}>Toggle Person</button>
                {persons}
            </div>
        );
    }
}

export default App;
