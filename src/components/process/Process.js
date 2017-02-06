import React, { Component } from 'react';
import $ from 'jquery';
import Request from 'superagent';

class Process extends Component {

    constructor(props) {
        super(props);
        this.changeProcessStatus = this.changeProcessStatus.bind(this);
    }
    
    render() {
        return (
            <div className="notification clearfix">
                <div className="pull-left fake-logo">
                    P
                </div>
                <div className="pull-left">
                    {this.props.proccess.name}
                    <p className="holder"><span className={this.props.proccess.status==="Running" ? "run-tag":"stop-tag"}>{this.props.proccess.status}</span>
                        <span className={this.props.proccess.type==="USER" ? "uprocess":"sprocess"}>{this.props.proccess.type} process</span>
                        <span className="pid">process_id : {this.props.proccess.id}</span>
                    </p>
                    <span className="date">modified : {new Date(this.props.proccess.lastUpdated).toISOString()}</span>

                </div>
                <div onClick={()=>{this.changeProcessStatus(this.props.proccess.id, this.props.proccess.status)}} className={this.props.proccess.status==="Running" ? "pull-right but-stop":"pull-right but-start"}>
                    {this.props.proccess.status==="Running" ? "Stop":"Start"}
                </div>
                
            </div>
        );
    }


    changeProcessStatus(processId, status){
        var newStatus = "";
        if(status === "Running"){
            newStatus = "Stopped";
        }else {
            newStatus = "Running";
        }
        var url = "http://localhost:8080/api/processes";
        Request.put(url).set('content-type', 'application/json').send({status:newStatus, id:processId}).then((response) => {
            $('.header-sections ul li').removeClass("active");
            $('.header-sections ul li:first-child').addClass("active");
            this.props.switchToNotifications("notifications");
        });

    }
 }

export default Process;