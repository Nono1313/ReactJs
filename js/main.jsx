var App = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Prueba ReactJs y los formularios</h1>
				<GraficoForm />
			</div>
			);
	}
});


ReactDOM.render(<App />, document.getElementById('container'));