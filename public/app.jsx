var Greeter = React.createClass({
	getDefaultProps: function (){
		return {
			name: 'React',
			msg: 'from the component'
		};
	},
	getInitialState: function() {
		return {
			name: this.props.name 
		};
	},
	onButtonClick: function (e) {
		e.preventDefault();

		var nameRef = this.refs.name;
		var name = nameRef.value;
		
		nameRef.value = '';

		if (typeof name=== 'string' && name.length > 0){
			this.setState({
			name: name
			});
		}
	},
	render: function () {
		var name = this.state.name;	
		var msg = this.props.msg;


		return (
			<div>
				<h1>Hello {name} Yall via JSX</h1>
				<p>{msg + '!!'}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
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