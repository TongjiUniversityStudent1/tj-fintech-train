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
                    那些长果子的树们就不同了，它们像母亲一样，把自己整个冬天、春天积攒的心血都化成乳汁，
                    来哺育婴儿的成长。那些千辛万苦从根部汲取的营养，从天上吸收的光亮，都一股脑儿给了那些果子们。
                    要不然，你瞧那些你挨我挤、嘟嘟噜噜的小青果们，为何闭着眼儿、傻着脸儿，
                    活脱脱地、不管不顾地、幸福安详地紧贴着赖以为命地枝条，撒着欢儿生长呢。
                </p>
            </div>
        )
    }
}
export default Tab1;