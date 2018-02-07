import React, {Component} from 'react';

export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            max: 3

        }
    };
    turnLeft() {
        if (this.state.index == this.state.max)
            this.state.index = 0;
        else this.state.index++;
        this.setState({index:this.state.index})
    };
    turnRight() {
        if (this.state.index == 0)
            this.state.index = this.state.max;
        else this.state.index--;
        this.setState({index:this.state.index})
    };
    render() {
        return (
            <div className="container">
               {/* <lunbo />*/}
                {/*<img src={require('../img/21.jpg')}/>*/}
                <h1>{this.state.index}</h1>
                <button className="btn btn-danger" onClick={this.turnRight.bind(this)}>right</button>
                <button className="btn btn-danger" onClick={this.turnLeft.bind(this)}>left</button>
            </div>
        );

    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    };

}


