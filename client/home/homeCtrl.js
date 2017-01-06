/**
 * Created by kumars92 on 12/20/2016.
 */
angular.module('viprApp')
    .controller("homeCtrl", function(designs, $scope, auth, $stateParams, dataService, $state) {
        $scope.designs = designs.data;
        $scope.auth = auth;


        $scope.deleteDesign = function(designId) {
            dataService.deleteDesign(designId);

        }
    });
