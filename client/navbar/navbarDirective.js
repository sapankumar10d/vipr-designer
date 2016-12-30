/**
 * Created by kumars92 on 12/19/2016.
 */
angular.module('viprApp')
    .directive('navbar',
        function () {
            return {
                restrict: 'E',
                controller: 'navbarCtrl',
                templateUrl: 'navbar/navbar.html'

            }

        }
    );
