angular.module('invoiceClosed', []).service('invoiceClosedService', function ($http) {
    return {
        invoice: function () {
            var req = {
                method: 'GET',
                url: 'http://localhost:3000?url=https://sandbox.original.com.br/cards/v1/0001/invoices/closed'
            };
            return $http(req)
                .then(function (items) {
                    debugger;
                })
                .catch(error => {
                    throw new Error(error);
                });
        },
    };
});
