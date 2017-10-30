import React from 'react'
import { render } from 'react-dom'
import baseRoute  from './route/baseRoute'
import { Router, Route, match , browserHistory , hashHistory, IndexRoute} from 'react-router'

import './style/index.css'
import './style/index2.less'


const history = browserHistory;

match({ history : history, routes : baseRoute }, (err, redirectLocation, renderProps) => {
    if(err){ //跳转错误页面

    }else if(redirectLocation){ //路由重定向

    }else if(renderProps){ //成功匹配路由
        render(<Router{...renderProps}/>, document.getElementById('app'));
    }else{ //404 空页面

    }
});

// render( (baseRoute) , document.getElementById('app'));