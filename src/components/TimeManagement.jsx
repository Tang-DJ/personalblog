import React, {Component} from 'react';
import ReactRouterDOM,{BrowserRouter, Route, Link} from 'react-router-dom';
import AddTimeManagement from './AddTimeManagement.jsx';
import "./TimeManagement.css";

export default class TimeManagement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    };
    /*table(){
        return (

        )
    }*/
    render(){
        return(
            <div className="container">
                <br/>
                <BrowserRouter>
                    <div>
                        <div className="left container">
                            <Link to="/AddTimeManagement"><button className="btn btn-info">新增任务</button></Link>
                            <Link to="/2"><button className="btn btn-danger">删除任务</button></Link>
                        </div>
                        <div>
                            <Route exact path="/TimeManagement" component={List} />
                            <Route exact path="/AddTimeManagement" render={() =><AddTimeManagement />} />
                            <Route exact path="/2" render={() => <h2>2</h2>} />
                        </div>
                    </div>

                </BrowserRouter>


            </div>
        );
    }
}

const List = () =>(
    <table className="table table-hover">
        <thead>
        <tr>
            <th>日期</th>
            <th>任务数</th>
            <th>已完成</th>
            <th>完成度</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>2018.2.7</td>
            <td>5</td>
            <td>4</td>
            <td>80%</td>
            <td><a>编辑</a><a>详情</a></td>
        </tr>
        <tr>
            <td>2018.2.7</td>
            <td>5</td>
            <td>4</td>
            <td>80%</td>
            <td><a>编辑</a><a>详情</a></td>
        </tr>
        <tr>
            <td>2018.2.7</td>
            <td>5</td>
            <td>4</td>
            <td>80%</td>
            <td><a>编辑</a><a>详情</a></td>
        </tr>
        </tbody>
    </table>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
