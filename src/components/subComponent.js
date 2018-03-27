import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'



export default class subComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/subComponent/subA">子组件一</Link>
                    <Link to="/subComponent/subB">子组件二</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


