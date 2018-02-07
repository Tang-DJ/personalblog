import React, { Component } from 'react';
import Navigation from './js/Navigation.js';
import Footer from './js/Footer.js';
import './css/App.css';


class App extends Component {

    render() {
        return (
        <div className="App">
            <Navigation />
           {/* <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>*/}
            <Footer />
        </div>




        );
    }
}

export default App;
