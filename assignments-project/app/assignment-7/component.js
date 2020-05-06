angular
    .module('myApp')
    .component('piping', {
        bindings: {},
        controller: function () {
            var vm = this;

            vm.showSolution = false;

            vm.user = {
                fullname: 'angular is fantastic',
            }

            vm.toggleSolution = function () {
                vm.showSolution = !vm.showSolution;
            }

            return vm;
        },
        templateUrl: 'assignment-7/template.html'
    })
    .filter('camelCase', () => {
        return (fullname) => {
            return camelize(fullname);
        };
    });

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}