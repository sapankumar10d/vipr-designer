/**
 * Created by kumars92 on 12/19/2016.
 */
angular.module('viprApp')
    .directive('footer',
        function () {
            return {
                restrict: 'E',
                templateUrl: 'footer/footer.html'
            }

        }
    );