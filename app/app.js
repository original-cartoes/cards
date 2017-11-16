angular
  .module('app', ['cardDetail', 'cardList', 'invoiceHistory', 'invoiceClosed', 'invoiceOpened'])
  .controller('appController', function($scope, CardDetailService, CardListService, InvoiceHistoryService, invoiceClosedService, invoiceOpenedService) {
    
    $scope.name = 'OKK';

    $scope.card = {};

    CardDetailService.detail().then(function(card) {
      console.log(card);
      $scope.card = card;
    });

    /*CardListService.list().then(function(items) {
      debugger;
    });

    InvoiceHistoryService.listHistory().then(function(items){
      debugger;
    });

    invoiceClosedService.invoice().then(function(items) {
      debugger;
    });

    invoiceOpenedService.invoice().then(function(items) {
      debugger;
    });*/
  });
