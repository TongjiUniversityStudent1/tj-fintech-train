import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import NavLink from '../component/NavLink'

// import Tab1 from '../component/Tab1';//默认打开项直接载入 其余按需加载

/*class Roots extends Component {
    render() {
        return (
            <div className="main-body">
                <h1>React base template</h1>
                <div className="base-head">
                    <NavLink className="isa" to="/home">文字</NavLink>
                    <NavLink className="isa" to="/about">DOM</NavLink>
                    <NavLink className="isa" to="/repos">Repos</NavLink>
                </div>
                <div className="base-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}*/

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

//分开打包每个模块的JS文件，自动合并同名文件
const Main = (location, callback) =>{
    require.ensure([], require => {
        callback(null, require('../component/App').default)
    },"tab1")
};
const Tab1 = (location, callback) =>{
    require.ensure([], require => {
        callback(null, require('../component/Tab1').default)
    },"tab2")
};
const Tab2 = (location, callback) =>{
    require.ensure([], require => {
        callback(null, require('../component/Tab2').default)
    },"tab3_4")
};
const Tab3 = (location, callback) =>{
    require.ensure([], require => {
        callback(null, require('../component/Tab3').default)
    },"tab3_4")
};
const Tab4 = (location, callback) =>{
    require.ensure([], require => {
        callback(null, require('../component/Tab4').default)
    },"tab3_5")
};

const baseRoute = (
    <Router history={history}>
        <Route path="/" getComponent={Main}>
            <IndexRoute getComponent={Tab1}/>
            <Route path="/home" getComponent={Tab1}/>
            <Route path="/about" getComponent={Tab2}/>
            <Route path="/repos" getComponent={Tab3}/>
            <Route path="/login" getComponent={Tab4}/>
        </Route>
    </Router>
);
export default baseRoute;