angular
    .module('myApp')
    .factory('listApi', ['$http', ($http) => {
        var svc = this;

        svc.getAll = () => {
            return $http.get('https://jsonplaceholder.typicode.com/todos');
        }

        return svc;
    }])
    .component('dummyList', {
        bindings: {},
        controller: ['listApi', function (api) {
            var vm = this;

            vm.items = [];

            vm.showSolution = false;

            vm.loading = false;

            vm.load = () => {
                vm.loading = true;
                api.getAll().then(
                    (resp) => {
                        vm.loading = false;
                        vm.items = resp.data;
                    },
                    (err) => {
                        vm.loading = false;
                        console.error(err);
                    }
                )
            }

            vm.toggleSolution = function () {
                vm.showSolution = !vm.showSolution;
            }
        }],
        templateUrl: 'assignment-6/template.html'
    });