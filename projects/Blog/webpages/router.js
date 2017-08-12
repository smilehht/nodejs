/**
*   @file 路由文件
*   @author hht
*/

import React, {Component} from 'react';
import ReactDOM from  'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Header from './js/header.js';


class Routes extends  Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' Component={App}>
            </Route>
        </Router>
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            {this.props.children}
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));