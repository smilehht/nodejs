/**
*   @file 主页的路由文件
*   @author huhongtao
*/

'use strict';

import React from 'react';
import ReactDOM from  'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Header from './components/header.js';

import '../../css/header.css';

// class Header extends React.Component {
//     render() {
//         return <div>
//             <a href='../register/#/'>注册页面</a>
//         </div>;
//     }
// }

class Body extends React.Component {
    render() {
        return <div>
            222
        </div>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div className='app'>
            <Header />
            {this.props.children}
        </div>;
    }
}

class Routes extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={App} >
                <Route path='body' component={Body} >
                </Route>
            </Route>
        </Router>;
    }
}

ReactDOM.render(<Routes />, document.getElementById('home'));