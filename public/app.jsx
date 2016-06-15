var Greeter = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Hello React Yall via JSX</h1>
				<p>form the component</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);