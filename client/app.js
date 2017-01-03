/**
 * Created by kumars92 on 12/19/2016.
 */
angular.module('viprApp', ['ui.router','ngMaterial', 'ui.bootstrap', 'auth0'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, authProvider) {
        $stateProvider
          .state('/', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'homeCtrl',
              data: { requiresLogin: true},
              resolve: {
                  designs: function(dataService) {
                      return dataService.getDesigns();
                  }
              }
          })
          .state('designDetail', {
              url: '/:designId',
              templateUrl: 'design/design.html',
              controller: 'editDesignCtrl',
              data: { requiresLogin: true},
              resolve: {
                  essm: function(dataService) {
                      return dataService.getEssm();
                  }
              }

          })
          .state('newdesign', {
              url: '/newdesign/',
              templateUrl: 'newDesign/designForm.html',
              controller: 'newDesignCtrl',
              data: { requiresLogin: true}

          })
            .state('login', {
                url:'/login/',
                templateUrl: 'login/login.html',
                controller: 'loginCtrl'
            })

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');


        authProvider.init({
            domain: 'viprdesigner.auth0.com',
            clientID: 'JrAEfUFEODeHUR3Xt27NIlB4YlLxWjjU',
            callbackUrl: location.href,
            loginState: 'login'
        });

    })

    .run(function(auth) {
        auth.hookEvents();
    });