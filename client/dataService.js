/**
 * Created by kumars92 on 12/20/2016.
 */
angular.module('viprApp')
    .service("dataService", function($http) {
    this.getDesigns = function() {
        return $http.get("/designs").
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error finding designs.");
        });
    }
    this.createDesign = function(design) {
        return $http.post("/designs", design).
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error creating design.");
        });
    }
    this.getDesign = function(designId) {
        var url = "/designs/" + designId;
        return $http.get(url).
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error finding this design.");
        });
    }
    this.editDesign = function(design) {
        var url = "/designs/" + design._id;
        //console.log(design._id);
        return $http.put(url, design).
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error editing this design.");
            console.log(response);
        });
    }
    this.deleteDesign = function(designId) {
        var url = "/designs/" + designId;
        return $http.delete(url).
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error deleting this design.");
            console.log(response);
        });
    }
})