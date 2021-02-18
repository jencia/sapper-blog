import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(
		(req, res, next) => {
			if (req.path.startsWith('/article/') && !req.path.endsWith('.json')) {
				// 简单监听用户访问的页面
				console.log(req.path);
			}
			next();
		},
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
