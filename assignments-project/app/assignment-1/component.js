angular
    .module('myApp')
    .component('dir', {
        bindings: {},
        controller: controller,
        templateUrl: 'assignment-1/template.html'
    });

function controller() {
    var vm = this;

    vm.showSolution = false;
    vm.chosenLanguage = 'it';
    vm.languages = ['it', 'en', 'fr', 'de'];

    vm.setLanguage = function (lang) {
        vm.chosenLanguage = lang;
    };

    vm.toggleSolution = function () {
        vm.showSolution = !vm.showSolution;
    }
}