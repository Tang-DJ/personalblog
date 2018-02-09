import React, {Component} from 'react';
import ReactRouterDOM,{BrowserRouter, Route, NavLink} from 'react-router-dom';


export class TimeManagement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    };
    render(){
        return(
            <div className="container">

                <BrowserRouter>

                    <div className="container">
                        <Route path="/222" render={() => <button className="btn btn-info">新增</button>} />
                        <Route path="/about" render={() => <button className="btn btn-danger">删除</button>} />
                    </div>
                </BrowserRouter>


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
            </div>
        );}
    }