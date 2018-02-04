import React, { Component } from 'react';
import ReactRouterDOM,{BrowserRouter, Route, NavLink} from 'react-router-dom';

export default class Navigation extends Component{

    render(){
        return(
        <div className="container">
            <BrowserRouter >
                <div className="container">
                    <nav className="nav nav-pills">
                        <li className="active"><NavLink exact to="/">首页</NavLink></li>
                        <li><NavLink to={{pathname: '/about'}}>个人简介</NavLink></li>
                        <li><NavLink  to="/contact">项目经历</NavLink></li>
                    </nav>
                    {/*<div>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route path="/about" render={() => <h1>About</h1>} />
                    <Route path="/contact" render={() => <h1>Contact</h1>} />
                </div>*/}



                </div>

            </BrowserRouter>
        </div>
        );
    }
}
/*

const isActiveFunc = (match, location) => {
    console.log(match,'contact')
    return match
}

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
        <NavLink
            isActive={isActiveFunc}
            activeClassName="active"
            to="/contact">Contact</NavLink>
    </nav>
)

const App = () => (
    <BrowserRouter>
        <div>
            <AddressBar/>

            <Links />

            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
        </div>
    </BrowserRouter>
)

/!* 为了展示URL的变化的组件 请无视我*!/
const AddressBar = () => (
    <Route render={({ location:{pathname}, history}) => (
        <div className="address-bar">
            <div>
                <button
                    className="ab-button"
                    onClick={history.goBack}
                >◀︎</button>
            </div>
            <div>
                <button
                    className="ab-button"
                    onClick={history.goForward}
                >▶</button>
            </div>
            <div className="url">URL: {location.pathname}</div>
        </div>
    )}/>
)
*/
