/**
 * Created by kumars92 on 12/20/2016.
 */

angular.module('viprApp')
    .controller("editDesignCtrl", function($scope, $stateParams, dataService, $window) {
        dataService.getDesign($stateParams.designId).then(function(doc) {
            $scope.design = doc.data;
        }, function(response) {
            alert(response);
        });

        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.designFormUrl = "newDesign/designForm.html";
        };

        $scope.back = function() {
            $scope.editMode = false;
            $scope.designFormUrl = "";
            $window.scrollTo(0, 0);
        };

        $scope.saveDesign = function(design) {
            dataService.editDesign(design);
            $scope.editMode = false;
            $scope.designFormUrl = "";
            $window.scrollTo(0, 0);
        };

        $scope.deleteDesign = function(designId) {
            dataService.deleteDesign(designId);
        }
    });