import React, { Component } from 'react';
import './NotificationDashboard.css';
import Notification from './Notification'
import Request from 'superagent';
import _ from 'lodash';

class NotificationDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { notifications: [] };
        //this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
            <div className="notification-page">
                {this.renderNotifications()}
            </div>
        );
    }

    renderNotifications() {

        return _.map(this.state.notifications, (notifications) => {
            return <Notification key={notifications.id} notification={notifications} />;
        });

    }

    componentWillMount(){
        var url = "http://localhost:8080/api/notifications";
        Request.get(url).then((response) => {
            this.setState({
                notifications: response.body
            });
        });
    }


}

export default NotificationDashboard;