'use strict';

function DataService($location) {
    const vm = this;

    vm.profile = {
        name: 'Grant Chirpus',
        contact: 'grant@grandcircus.co',
        bio: 'I am pretty cool. I a great job. I like to play Tetris. I am pretty OK at AngularJS.'
    }

    vm.setUserProfile = (profile) => {
        vm.profile = profile;
        console.log("Set: ");
        console.log(profile);
        $location.path('/user-profile');
    };

   vm.getUserProfile = () => {
        console.log("Get: ")
        console.log(vm.profile);
        return vm.profile;
   };
}

angular.module('app').service('DataService', DataService);