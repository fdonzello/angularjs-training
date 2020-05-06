angular
    .module('myApp')
    .component('countryPage', {
        bindings: {},
        controller: controller,
        templateUrl: 'assignment-2/template.html'
    })
    .directive('country', () => {
        return {
            restrict: 'E',
            scope: {
                code: '='
            },
            templateUrl: 'assignment-2/directive-template.html'
        };
    })

function controller() {
    var vm = this;

    vm.showSolution = false;
    vm.countryCode = 'it';

    vm.toggleSolution = function () {
        vm.showSolution = !vm.showSolution;
    }
}