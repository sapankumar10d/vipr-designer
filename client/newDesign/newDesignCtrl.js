/**
 * Created by kumars92 on 12/20/2016.
 */
angular.module('viprApp')
    .controller("newDesignCtrl", function($scope, $location, dataService, auth, $state, $window) {
        $scope.back = function() {
        $state.go("/");
        $window.scrollTo(0, 0);
        }

        $scope.auth = auth;


        $scope.saveDesign = function(design) {
            dataService.createDesign(design).then(function(doc) {
                var designUrl = "/design/" + doc.data._id;
                $location.path(designUrl);
            }, function(response) {
                alert(response);
            });
            $window.scrollTo(0, 0);
        }
});