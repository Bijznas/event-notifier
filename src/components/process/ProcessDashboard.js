import React, { Component } from 'react';
import './Process.css';
import Request from 'superagent';
import _ from 'lodash';
import Process from './Process';
import $ from 'jquery';

class ProcessDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { proccesses: [], processCount : {system:0, user:0} };
        this.simulateAProcess = this.simulateAProcess.bind(this);
    }

    render() {
        return (
            <div className="process-page">
                <div className="process-container clearfix">
                    <div className="process">
                        <div>User Process</div>
                        <div className="number-process">
                            {this.state.processCount.user}<span>process running</span>
                        </div>
                        <div className="clearfix process-buttons">
                            <span onClick={()=>{this.simulateAProcess("USER")}}>Simulate a user process >>></span>
                            <span onClick={()=>{alert("Yet to be implemented");}}>Terminate all user process</span>
                        </div>

                    </div>
                    <div className="process">
                        <div>System Process</div>
                        <div className="number-process">
                            {this.state.processCount.system}<span>process running</span>
                        </div>
                        <div className="clearfix process-buttons">
                            <span onClick={()=>{this.simulateAProcess("SYSTEM")}}>Simulate a System process >>></span>
                            <span onClick={()=>{alert("Yet to be implemented");}}>Terminate all System process</span>
                        </div>
                    </div>
                </div>
                {this.renderProcesses()}
            </div>
        );
    }

    simulateAProcess(type){
        var url = "http://localhost:8080/api/processes";
        Request.post(url).set('content-type', 'application/json').send({type:type, name:"A fake process started by the simulation."}).then((response) => {
            //console.log(">>>>>>>>>>" + response.body.id);
            $('.header-sections ul li').removeClass("active");
            $('.header-sections ul li:first-child').addClass("active");
            this.props.switchToNotifications("notifications");
        });
    }

    renderProcesses() {

        return _.map(this.state.proccesses, (proccesses) => {
            return <Process switchToNotifications={this.props.switchToNotifications} key={proccesses.id} proccess={proccesses}/>;
        });

    }

    componentWillMount(){
        var url = "http://localhost:8080/api/processes";
        Request.get(url).then((response) => {
            this.setState({
                proccesses: response.body
            });
        });

        var urlProcessCount = "http://localhost:8080/api/processes/count";
        Request.get(urlProcessCount).then((response) => {
            this.setState({
                processCount : {system:response.body.system, user:response.body.user}
            });
        });

    }

}

export default ProcessDashboard;