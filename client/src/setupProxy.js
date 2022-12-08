const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		createProxyMiddleware('/api/*', {
			target: 'http://localhost:8080/',
			secure: false
		})
	);
	app.use(
		createProxyMiddleware('/api/queryallcars', {
			target: 'http://localhost:4444/',
			secure: false
		})
	);
};
