app.controller('resgateCtrl', function($scope, $http){
	$http.get("http://www.mocky.io/v2/5e76797e2f0000f057986099")
				.then(function(resposta){
					$scope.investimento = resposta.data.response.data.listaInvestimentos[0];
				},function(){
					$scope.investimento = "Algo deu muito errado.";
				});
});