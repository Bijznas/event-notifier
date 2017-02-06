import React, { Component } from 'react';

/**
 * Notification element
 */
class Notification extends Component {

    render() {
        return (
            <div className="notification clearfix">
                <div className="pull-left fake-logo">
                    N
                </div>
                <div className="pull-left">
                    {this.props.notification.title}
                    <p>{this.props.notification.description}</p>
                    <span className="date">{new Date(this.props.notification.dateCreated).toISOString()}</span>

                </div>
                
            </div>
        );
    }

 }

export default Notification;