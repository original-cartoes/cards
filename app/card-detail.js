//erick
angular.module('cardDetail', []).service('CardDetailService', function($http) {
  return {
    detail: function() {
      var req = {
        method: 'GET',
        url:
          'http://localhost:3000/?url=https://sandbox.original.com.br/cards/v1',
      };
      return $http(req)
        .then(function(items) {
          return items.data;
        })
        .catch(error => {
          throw new Error(error);
        });
    },
  };
});
