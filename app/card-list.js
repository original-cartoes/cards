//erick
//erick
angular.module('cardList', []).service('CardListService', function($http) {
  return {
    list: function() {
      var req = {
        method: 'GET',
        url: 'https://sandbox.original.com.br/cards/v1',
        headers: {
          Authorization:
            'Bearer MzFlYWE0NjAtY2FiMi0xMWU3LWE3YzAtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1UQTRNalV6TnpRc0ltVjRjQ0k2TVRVeE1USTFOek0zTkN3aVlYVmtJam9pWWpZMk1HRTNaRFFpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqTXhaV0ZoTkRZd0xXTmhZakl0TVRGbE55MWhOMk13TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNklqZzBaamhpTWpVd0xXTmhZakl0TVRGbE55MWhOMk13TFdNeE56WXlaRFl3TlRRME5pSjkuMEVOemdmWlBLcEpTOEUxc05GeTdwWXd5MTRraUVEMi1yaUtQenNSUFVtZw==',
          'developer-key': '28f9b5c9063a29601340f1a9a00507569ad7fac4',
        },
      };
      return $http
        .jsonp('https://sandbox.original.com.br/cards/v1', {
          headers: {
            Authorization:
              'Bearer MzFlYWE0NjAtY2FiMi0xMWU3LWE3YzAtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1UQTRNalV6TnpRc0ltVjRjQ0k2TVRVeE1USTFOek0zTkN3aVlYVmtJam9pWWpZMk1HRTNaRFFpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqTXhaV0ZoTkRZd0xXTmhZakl0TVRGbE55MWhOMk13TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNklqZzBaamhpTWpVd0xXTmhZakl0TVRGbE55MWhOMk13TFdNeE56WXlaRFl3TlRRME5pSjkuMEVOemdmWlBLcEpTOEUxc05GeTdwWXd5MTRraUVEMi1yaUtQenNSUFVtZw==',
            'developer-key': '28f9b5c9063a29601340f1a9a00507569ad7fac4',
          },
        })
        .then(function(items) {
          return items;
        })
        .catch(error => {
          throw new Error(error);
        });
    },
  };
});
