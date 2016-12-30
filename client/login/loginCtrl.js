/**
 * Created by kumars92 on 12/28/2016.
 */
angular.module('viprApp')
    .controller('loginCtrl', function(auth, $state){
        auth.signin({
            popup: true,
            chrome: true,
            standalone: true

        }, function(profile, idToken, accessToken, state, refreshToken){
            $state.go('/')

        }, function(err){
            console.log("Error:", err);

        });

    });