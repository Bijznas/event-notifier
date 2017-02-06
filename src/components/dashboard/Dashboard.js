import React, { Component } from 'react';
import './Dashboard.css';
import Header from "../header/Header"
import NotificationDashboard from "../notifications/NotificationDashboard"
import ProcessDashboard from "../process/ProcessDashboard"

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state={ currentView: "notifications" };
        this.changeTab = this.changeTab.bind(this);
    }

    render() {
        return (
            <div className="dashboard">
                <Header changeTab={this.changeTab}/>
                <div className="clearfix mid-content">
                    <div className="left">
                        <div className="other-content">some content</div>
                        <div className="other-content long">some content</div>
                    </div>
                    <div className="right">
                        {this.renderSelectedView("notifications")}
                    </div>
                </div>

            </div>
        );
    }

    renderSelectedView(view){
        if(this.state.currentView === "notifications"){
            return <NotificationDashboard/>;
        }else {
            return <ProcessDashboard switchToNotifications={this.changeTab}/>;
        }

    }

    changeTab(tab){
        this.setState({
            currentView: tab
        });
    }
    
}

export default Dashboard;