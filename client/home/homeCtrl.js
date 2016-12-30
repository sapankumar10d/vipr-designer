/**
 * Created by kumars92 on 12/20/2016.
 */
angular.module('viprApp')
    .controller("homeCtrl", function(designs, $scope, auth) {
        $scope.designs = designs.data;
        $scope.auth = auth;
    });
