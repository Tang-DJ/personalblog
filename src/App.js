import React, { Component } from 'react';
import {Navigation} from './js/Navigation.js';
import {Footer} from './js/Footer.js';
import './css/App.css';
import Introduce from './js/Introduce';
import {TimeManagement} from './js/TimeManagement';

class App extends Component {

    render() {
        return (
        <div className="App">
            <Navigation />
            <TimeManagement />
            {/*<Introduce />*/}
            <Footer />
        </div>
        );
    }
}
export default App;
