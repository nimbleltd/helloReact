var Greeter = React.createClass({
	getDefaultProps: function (){
		return {
			name: 'React',
			msg: 'from the component'
		};
	},
	render: function () {
		var name = this.props.name;	
		var msg = this.props.msg;


		return (
			<div>
				<h1>Hello {name} Yall via JSX</h1>
				<p>{msg + '!!'}</p>
			</div>
		);
	}
});

var firstName = "PJC";
var message = "frmoTheProp"

ReactDOM.render(
	<Greeter name={firstName} msg={message}/>,
	document.getElementById('app')
);