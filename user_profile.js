'use strict';

const userProfile = {
    template: `
    <section class="section__profile">
        <section class="section__image">
        <img src="grant.png">
        </section>
        <section class="section__info">
        <h1 class="h1__name"> {{ $ctrl.info.name }} </h1>
        <p class="p__contact-info"> {{ $ctrl.info.contact }} </p>
        <p class="p__bio"> {{ $ctrl.info.bio }} </p>
        <button class="btn__edit" type="button" ng-click="$ctrl.updatedInfo();">Edit</button>
        </section>
    </section>
    `,
    controller: ['DataService', '$location', function(DataService, $location) {
        const vm = this;

        vm.info = DataService.getUserProfile();

        vm.updatedInfo = () => {
            vm.profile = DataService.getUserProfile();
            console.log('Update: ');
            console.log(vm.profile);
            $location.path('/edit_profile');
        };
    }]

}

angular.module('app').component('userProfile', userProfile);