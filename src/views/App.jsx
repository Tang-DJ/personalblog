import React, { Component } from 'react';
import {Navigation} from '../components/Navigation.jsx';
import {Footer} from '../components/Footer.jsx';

import './App.css';


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
