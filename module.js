'use strict';

angular.module('app', ['ngRoute'])
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider
        .when('/user_profile', {
            template: '<user-profile></user-profile>'
        })
        .when('/edit_profile', {
            template: '<edit-profile></edit-profile>'
        })
        .otherwise({ redirectTo: 'user_profile'
    });
}]);    