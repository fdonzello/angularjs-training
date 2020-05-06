angular
    .module('myApp')
    .component('assignment3', {
        bindings: {},
        controller: controller,
        templateUrl: 'assignment-3/template.html'
    })
    .component('countryAsComponent', {
        bindings: {
            code: '=',
            onClick: '&'
        },
        templateUrl: 'assignment-3/component-template.html',
        controller: function () {
            var vm = this;

            vm.handleClick = () => {
                console.log('clicked');
                vm.onClick({ code: vm.code });
            }

            return vm;
        }
    });


function controller() {
    var vm = this;

    vm.showSolution = false;
    vm.countryCode = 'it';

    vm.onChildComponentClick = function (code) {
        alert(`*arg is: ${code}* click coming from the child component. Alert coming from parent component`);
    }

    vm.toggleSolution = function () {
        vm.showSolution = !vm.showSolution;
    }
}