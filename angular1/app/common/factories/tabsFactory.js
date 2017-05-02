(function () {
    angular.module('primeiraApp').factory('tabs', [TabsFactory])

    function TabsFactory() {

        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false
        }) {
            owner.tabList = tabList
            owner.tabDelete = tabDelete
            owner.tabUpdate = tabUpdate
            owner.tabCreate = tabCreate
        }

        return { show }
    }
})()