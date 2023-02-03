const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

/**
 * @desption /person 后端
 *
 */
app.get('/person', (req, res) => {
  console.log('person接口被调用')
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
app.listen(1000, err => {
	if (!err) console.log('服务器启动了');
});
