/**
 * @file 主页的标题栏
 * @author huhongtao
 * @data 17/7/2
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// 菜单栏配置,支持一级子菜单
let menuList = [
    {
        name: '主页',
        key: 'index'
    },
    {
        name: '新闻',
        key: 'news'
    },
    {
        name: '微博',
        key: 'blog',
        children: [
            {
                name: '新浪微博',
                key: 'sina'
            },
            {
                name: '腾讯微博',
                key: 'tecent'
            }
        ]
    },
    {
        name: '共享单车',
        key: 'shareCyle',
        children: [
            {
                name: 'ofo单车',
                key: 'ofo'
            },
            {
                name: '摩拜单车',
                key: 'mobike'
            }
        ]
    }
];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    onClickMenu(e) {
        console.log(e.target.id);
    }

    render() {
        const current = this.state.current;
        return <header className='header' onClick={this.onClickMenu.bind(this)}>
            <ul>
                {
                    menuList.length > 0
                    && menuList.map((item, index) => {
                        return <li
                            key={item.key}
                            className='item'
                            style={{padding: 10, float: 'left', color: current === index ? 'blue':''}}
                            id={item.key}
                        >
                            {item.name}
                        </li>;
                    })
                }
            </ul>
        </header>;
    }
}