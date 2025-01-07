import React, {Component} from 'react';
import './App.css';
import DistributorTableView from "./DistributorTableView";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>AUGUR</h1>
                <DistributorTableView/>
            </div>
        );
    }
}

export default App;
