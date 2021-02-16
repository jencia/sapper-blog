import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { middleware } from '@sapper/server';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(6000, err => {
		if (err) console.log('error', err);
	});
