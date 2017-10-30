import React, {Component, PropTypes} from 'react';

class Tab1 extends Component{
    constructor(props) {
        super(props);
    }
    // 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
    componentWillMount(){

    }
    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    componentDidMount(){

    }
    // 组件接受新的state或者props时调用，调用this.forceUpdate会跳过此步骤
    shouldComponentUpdate(nextProps, nextState){

    }
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps, nextState){

    }
    //组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate(){

    }
    //组件将要卸载时调用
    componentWillUnmount(){

    }
    render() {
        return (
            <div className="blue-font">
                <p>
                    
                </p>
            </div>
        )
    }
}
export default Tab1;