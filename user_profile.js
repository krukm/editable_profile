'use strict';

const userProfile = {
    template: `
    <section class="section__profile">
        <section class="section__image"></section>
        <h1 class="h1__name"> {{ $ctrl.updateInfo.name }} </h1>
        <p class="p__contact-info"> {{ $ctrl.updateInfo.contact }} </p>
        <p class="p__bio"> {{ $ctrl.updateInfo.bio }} </p>
        <button class="btn__edit" type="button" ng-click="$location.path('/edit_profile');">Edit</button>
    </section>
    `,
    controller: ['DataService', function(DataService) {
        const vm = this;

        vm.updateInfo = () => {
            vm.profile = DataService.getUserProfile();
            console.log(vm.profile);
        };
    }]

}

angular.module('app').component('userProfile', userProfile);