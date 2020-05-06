angular
    .module('myApp')
    .factory('user', () => {
        var svc = this;
        svc.users = [];

        svc.registerUser = function (user) {
            svc.users.push({ ...user });
        }

        svc.logUsers = function () {
            console.log(svc.users);
        }

        return svc;
    })
    .component('templateRegister', {
        bindings: {},
        controller: ['user', function (userService) {
            var vm = this;

            vm.showSolution = false;

            vm.user = {
                name: '',
                email: '',
                password: ''
            }

            vm.submit = function () {
                alert(`${vm.user.name} - ${vm.user.email} - ${vm.user.password}`);
                userService.registerUser(vm.user);
                userService.logUsers();
            }

            vm.toggleSolution = function () {
                vm.showSolution = !vm.showSolution;
            }
        }],
        templateUrl: 'assignment-4-5/template.html'
    });