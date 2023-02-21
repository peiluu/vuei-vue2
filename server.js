const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type,Content-Length,Authorization,Accept,X-Requested-With'
	);
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By', '3.2.1');
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

/**
 * @desption /person 后端路由配置
 *
 */
app.get('/person', (req, res) => {
	console.log('person接口被调用');
	res.send({
		code: 0,
		data: {
			name: 'tom',
			age: 18,
		},
	});
});

app.post('/sendUser', (req, res) => {
	console.log(req);
	if (req) {
		res.send({
			code: 0,
			data: {
				name: 'tom',
				age: 18,
			},
		});
	}
});
app.listen(1002, err => {
	if (!err) console.log('服务器启动了');
});
