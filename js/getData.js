function getData(grafico){
	var data = Array();
	$.ajax({ 
    	type: 'GET', 
    	url: 'http://bcstest.mybluemix.net/bcstest/rest/indices/consultaIndices', 
    	crossDomain: true,
	    data: {
	    	indice: grafico.indice,
	    	periodo: grafico.periodo,
	    	f_desde: grafico.f_desde,
	    	f_hasta: grafico.f_hasta
	    }, 
    	dataType: 'jsonp',
	    success: function (response) { 
	        console.log(response);
	        data = response;
	    },
	    error: function (xhr, status, error){
	    	alert(JSON.stringify(xhr));
	    },
	});
};

var newGrafico = {
	indice: '',
	periodo: 'ME',
	f_desde: '2015-01-01',
	f_hasta: '2016-01-01',
}

getData(newGrafico);