(function() {
	'use strict';

	/* Controllers */

	var myMoneyApp = angular.module('myMoneyApp', []);

	myMoneyApp
			.controller(
					'TipoGastoListCtrl',
					function($scope) {
						$scope.tipos = [
								{
									'codigo' : '1',
									'descricao' : 'Alimentação',
									'detalhe' : 'Gastos diretos com alimentação. Por exemplo, restaurantes para almoçar e jantar diariamente. Restaurantes para diversão e ingredientes comprados no supermercado não entram aqui.'
								},
								{
									'codigo' : '2',
									'descricao' : 'Casa',
									'detalhe' : 'Gastos para habitar a moradia. Por exemplo, aluguel, produtos de limpeza e produtos de higiene pessoal. Supermercado e drogaria em casa entram aqui.'
								},
								{
									'codigo' : '3',
									'descricao' : 'Carro',
									'detalhe' : 'Gastos para usar e manter carro. Por exemplo, lavar e abastecer. Revisões e impostos entram aqui.'
								},
								{
									'codigo' : '4',
									'descricao' : 'Misc.',
									'detalhe' : 'Gastos que podem ser cortados. Por exemplo, manter a prática de esportes, restaurantes para diversão e tv a cabo. Isso não significa que esses gastos não são importantes.'
								},
								{
									'codigo' : '5',
									'descricao' : 'Ensino',
									'detalhe' : 'Gastos relacionados ao aprimoramento de conhecimentos teóricos e profissionais. Cursos e materiais para o estudo de concursos entram aqui. Livros para diversão não entram aqui.'
								} ];

						$scope.orderProp = 'descricao';
					});
})();