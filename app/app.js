angular
  .module('app', ['cardDetail', 'cardList', 'invoiceHistory'])
  .controller('appController', function(CardDetailService, CardListService, InvoiceHistoryService) {
    this.name = CardDetailService.name;
    CardDetailService.detail().then(function(items) {
      debugger;
    });

    CardListService.list().then(function(items) {
      debugger;
    });

    InvoiceHistoryService.listHistory().then(function(items){
      debugger;
    });
  });
