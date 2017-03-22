ReactDOM.render(
  <h1>Hello, world!</h1>,document.getElementById('root'));

var Greeting = React.createClass({
	render : function(){
		return (<h2>Hi {this.props.username}!</h2>);
	}
});
ReactDOM.render(<Greeting username='Vipin' />,document.getElementById('greeting'));