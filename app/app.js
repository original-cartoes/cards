angular
  .module('app', ['cardDetail', 'cardList', 'invoiceHistory', 'invoiceClosed', 'invoiceOpened'])
  .controller('appController', function($scope, CardDetailService, CardListService, InvoiceHistoryService, invoiceClosedService, invoiceOpenedService) {
    
    $scope.card = {};
    $scope.invoiceOpened = {};
    $scope.invoiceClosed = {};

    CardDetailService.detail().then(function(card) {
      $scope.card = card;
    });

    $scope.invoiceOpened = function() {
      invoiceOpenedService.invoice().then(function(invoice) {
        $scope.invoiceOpened = invoice;
      });
    };

    $scope.invoiceClosed = function() {
      invoiceClosedService.invoice().then(function(invoice) {
        $scope.invoiceOpened = invoice;
      });
    };

    /*
    CardListService.list().then(function(items) {
      debugger;
    });

    InvoiceHistoryService.listHistory().then(function(items){
      debugger;
    });
    */

  });
