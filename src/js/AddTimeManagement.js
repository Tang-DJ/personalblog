import React,{Component} from 'react';
import "../css/AddTimeManagement.css";

export default class AddTimeManagement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: 3,
            max:5
        };

    };
    addTask(){
        this.setState((preState) => ({
            item: preState.item + 1
        }))
    };
    render(){
        let taskC = [];
        let detailC = [];
        for(let i = 0;i< this.state.item;i++){
            taskC.push(
                <input type="text" className="form-control input-b" placeholder="任务" id={"task"+i}/>
            );
            detailC.push(
                <input type="text" className="form-control input-b" placeholder="详情描述" id={"detail"+i} />
            );
        }
        return(
            <div className="container">

                <button className="btn btn-info" onClick={this.addTask.bind(this)}>增加任务</button>

                <form className="text-left">

                    <div className="form-group col-md-4">
                        <label>任务</label>
                        {taskC}
                    </div>
                    <div className="form-group col-md-8">
                        <label>详情</label>
                        {detailC}
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>
        )
    };
}