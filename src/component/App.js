import React ,{Component} from 'react'
import NavLink from './NavLink'


class Main extends Component{
    render() {
        return (
            <div className="main-body">
                <h1 className="center text-center">React base template1</h1>
                <div className="base-head">
                    <NavLink className="isa" to="/home">首页</NavLink>
                    <NavLink className="isa" to="/about">用户</NavLink>
                    <NavLink className="isa" to="/repos">管理员</NavLink>
                    <NavLink className="isa" to="/login">登录</NavLink>
                </div>
                <div className="base-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Main