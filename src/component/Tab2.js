import React ,{Component} from 'react'
import $ from 'jquery'

class Tab2 extends Component{
    constructor(props) {
        super(props);
        let _this = this;
        this.state = {
            textareaValue: {
                a: "红色",
                b: "蓝色",
                c: "绿色",
            },
            textareaKey: "a",
            name: "",
            describe: ""
        };

        this.setTextValue = (event)=>{
            _this.setState({
                describe: _this.state.textareaValue[event.target.value]
            });
            console.log(_this.state);
        };
        this.inputOnChange = (event)=>{
            console.log(event.target.type);
            let obj = {};
            switch (event.target.type) {
                case "text":
                    obj = {name: event.target.value};
                    break;
                case "textarea":
                    obj = {describe: event.target.value};
                    break;
            }
            _this.setState(obj);
        };
        // this.alertOk = ()=>{
        //     $.ajax({
        //         type:"get",
        //         url:"http://"+window.location.host+"/TestSlt",
        //         dataType:"JSON",
        //         success:function(data){

        //         },
        //         complete:function (data) {

        //         }
        //     })
        // };
        this.alertOk = ()=>{
            var postBody = {
                index: "testValue"
            }
            $.ajax({
                type:"post",
                url:"/users/test",
                data:postBody,
                dataType:"JSON",
                success:function(data){
                    alert(JSON.stringify(data));
                    console.log(JSON.stringify(data));
                },
                complete:function (data) {

                }
            }).error(function(err){
                console.log(JSON.stringify(err));
                alert(err.responseText);
            });
        };
        this.newBlock = ()=>{

        }
    }

    render(){
        return (
            <div className="scanDom">
                <div className="scan-row">
                    <div className="scan-text">姓名：</div>
                    <div className="scan-cont">
                        <input type="text" onChange={this.inputOnChange} value={this.state.name}/>
                    </div>
                </div>

                <div className="scan-row">
                    <div className="scan-text">颜色：</div>
                    <div className="scan-cont">
                        <select className="you-color" onChange={this.setTextValue}>
                            <option value="a">红</option>
                            <option value="b">蓝</option>
                            <option value="c">绿</option>
                        </select>
                    </div>
                </div>

                <div className="scan-row">
                    <div className="scan-text">简介：</div>
                    <div className="scan-cont">
                        <textarea style={{height: 60}} value={this.state.describe} onChange={this.inputOnChange}/>
                    </div>
                </div>
                <div className="scan-row">
                    <div className="scan-text">&nbsp;</div>
                    <div className="scan-cont">
                        <button onClick={this.alertOk}>保存</button>
                        <button onClick={this.newBlock}>新加块</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tab2;