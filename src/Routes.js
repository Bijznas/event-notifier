import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
// import BucketHolder from './components/bucket-holder/BucketHolder';
// import Main from './components/Main';
// import About from './components/about/About';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';


const Routes = (props)=>(
    <Router {...props}>
        <Route path="/" >
            <IndexRoute component={Login} />
            <Route path="login" component={Login} />
            <Route path="dashboard" component={Dashboard} />
        </Route>
    </Router>
);

export default Routes;

//npm install -g create-react-app
