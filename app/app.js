angular
  .module('app', ['cardDetail', 'cardList'])
  .controller('appController', function(CardDetailService, CardListService) {
    this.name = CardDetailService.name;
    CardDetailService.detail().then(function(items) {
      debugger;
    });

    // CardListService.list().then(function(items) {
    //   debugger;
    // });
  });
