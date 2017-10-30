import React ,{Component} from 'react'
import { observable, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';

/***
 * @observer 注解声明 被注解的类将开启观察者能力，可以观察 被 @observable 声明的变量
 * 一旦被 @observable 声明的变量发生变化 该组件将会重新render
 */
@observer
class Tab3 extends Component{

    @observable inputValue = "第一个选择";

    constructor(props) {
        super(props);
        let _this = this;

        this.changeValue = (event)=>{
            let val = event.target.value;
            if(val === "a"){
                _this.inputValue = "第一个选择";
            }else if(val === "b"){
                _this.inputValue = "第二个选择";
            }else if(val === "c"){
                _this.inputValue = "第三个选择";
            }
        }
        this.alertOk = ()=>{
            alert("nihao!");
        };
    }

    render(){
        return (
            <div className="scanDom">
                <div className="scan-row-nav">
                    <div>导航</div>
                    <div>
                        <ul>
                            <li onClick={this.alertOk}>Link1</li>
                            <li>Link2</li>
                            <li>Link3</li>
                            <li>Link4</li>
                        </ul>
                    </div>
                </div>
                <div className="scan-row">
                <div className="scan-row">
                    <div className="scan-text">选择框：</div>
                    <div className="scan-cont">
                        <select className="you-color" onChange={this.changeValue}>
                            <option selected="selected" value="a">1</option>
                            <option value="b">2</option>
                            <option value="c">3</option>
                        </select>
                    </div>
                </div>

                <div className="scan-row">
                    <div className="scan-text">文本：</div>
                    <div className="scan-cont">
                        <textarea style={{height: 60}} value={this.inputValue}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Tab3;
