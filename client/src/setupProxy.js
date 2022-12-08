const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		createProxyMiddleware('/api/*', {
			target: 'http://localhost:8080/',
			secure: false
		})
	);
	app.use(
		createProxyMiddleware('/apiV2/submit/', {
			target: 'http://localhost:4444/',
			secure: false
		})
	);
};
