if (document.querySelectorAll('a').length) {
	require.ensure([], () => {
		//const Button = require('./Components/Button');
		const Button = require('babel!./Components/Button').default;

		const button = new Button('google.com');

		button.render('a');
	});
}
