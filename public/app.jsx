var Greeter = React.createClass({
	getDefaultProps: function (){
		return {
			name: 'React'
		};
	},
	render: function () {
		var name = this.props.name;	

		
		return (
			<div>
				<h1>Hello {name} Yall via JSX</h1>
				<p>form the component</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter name="Paul"/>,
	document.getElementById('app')
);