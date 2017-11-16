angular
  .module('app', ['cardDetail'])
  .controller('appController', function(CardDetailService) {
    this.name = CardDetailService.name;
    CardDetailService.list().then(function(items) {
      debugger;
    });
  });
