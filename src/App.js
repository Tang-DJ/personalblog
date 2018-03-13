import React, { Component } from 'react';
import {Navigation} from './js/Navigation.js';
import {Footer} from './js/Footer.js';
import './css/App.css';


class App extends Component {

    render() {
        return (
        <div className="App">
            <Navigation />
       {/*     <TimeManagement />*/}
            <Footer />
        </div>
        );
    }
}
export default App;
