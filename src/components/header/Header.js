import React, { Component } from 'react';
import './Header.css';
import $ from 'jquery';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    render() {
        return (
            <div className="header">
                <div className="header-wrapper clearfix">
                    <div className="header-sections title">
                        Dashboard
                    </div>
                    <div className="header-sections">
                        <ul className="clearfix">
                            <li className="active" onClick={(e) => this.clickFromTab("notifications", e)}>Notifications</li>
                            <li onClick={(e) => this.clickFromTab("processes", e)}>Processes</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }

    clickFromTab(tab, e){
        $('.header-sections ul li').removeClass("active");
        e.target.className = "active";
        this.props.changeTab(tab);
    }


}

export default Header;