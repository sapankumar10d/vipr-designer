/**
 * Created by kumars92 on 12/29/2016.
 */
angular.module('viprApp')
    .controller('navbarCtrl', function(auth, $scope, $state){
        $scope.auth = auth;

        $scope.logout = function() {
            auth.signout();
            $state.go('login');
        };
    });