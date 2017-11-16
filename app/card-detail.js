//erick
angular.module('cardDetail', []).service('CardDetailService', function($http) {
  return {
    detail: function() {
      var req = {
        method: 'GET',
        url:
          'https://cards-original.herokuapp.com?url=https://sandbox.original.com.br/cards/v1/0001',
      };
      return $http(req)
        .then(function(items) {
          debugger;
        })
        .catch(error => {
          throw new Error(error);
        });
    },
  };
});
