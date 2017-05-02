(function () {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        //'$location',
        'msgs',
        //   'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this
        const url = `http://localhost:3003/api/billingCycles`
        vm.create = function () {
            $http.post(url, vm.BillingCycle).then(function (response) {
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function (response) {
                msgs.addError(response.data.errors)
            })
        }
    }
})()