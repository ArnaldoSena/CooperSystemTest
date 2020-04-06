app.controller('investCtrl', function($scope, $http){
				$http.get("http://www.mocky.io/v2/5e76797e2f0000f057986099")
				.then(function(resposta){
					$scope.investimentos = resposta.data.response.data.listaInvestimentos;
				},function(){
					$scope.investimentos = "Algo deu muito errado.";
				});

				$scope.go = function(investimento){
				
					$rootScope.resgatado = investimento.nome;
				}

	
			});