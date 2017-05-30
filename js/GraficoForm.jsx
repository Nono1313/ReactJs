var GraficoForm = React.createClass({
	handleSubmit: function(){
		alert('submiteado');
	},
	render: function(){
		return (
			<div>
				<h2>Ingrese Valores a Graficar:</h2>
				<form>
					<table>
						<label>
							Indice:
						</label>
						<input type="text"></input>
						
						<button type="button" onClick={this.handleSubmit}>Ingresar
						</button>
					</table>
				</form>
			</div>
		);
	},
});

var FormInput = React.createClass({

	SingleInput.propTypes = {  
	  	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	  	title: React.PropTypes.string.isRequired,
	  	name: React.PropTypes.string.isRequired,
	  	controlFunc: React.PropTypes.func.isRequired,
	  	content: React.PropTypes.oneOfType([
	    	React.PropTypes.string,
	    	React.PropTypes.number,
	  	]).isRequired,
	  	placeholder: React.PropTypes.string,
	},
	render: function(){
		return(
			<tr>
				<td> <label> </label></td>
				<td> <input> </input></td>
			</tr>
		);
	}
})
