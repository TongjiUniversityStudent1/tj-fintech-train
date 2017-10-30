let express = require('express');
let path = require('path');
let compression = require('compression');

let app = express();

//将需要引入的路由定义为变量
let users = require('./src/route/users');

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

//将需要引入的路由挂载到app
app.use('/users',users);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

let PORT = 7777;
app.listen(PORT, function() {
    console.log('=================》》Production Express server running at localhost:' + PORT)
});

