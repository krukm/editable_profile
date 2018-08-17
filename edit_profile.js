'use strict';

const editProfile = {
    template: `
    <section class="section__edit-profile">
        <form class="form__edit" ng-submit="$ctrl.onSubmit($ctrl.edited);">
            <p class="p__description">Use the form below to update your profile.</p>
            <label for="name">Name
                <input class="input__name" type="text" ng-model="$ctrl.edited.name">
            </label>
            <label for="contact">Contact
                <input class="input__contact" type="text" ng-model="$ctrl.edited.contact">
            </label>
            <label for="bio">Bio
                <input class="input__bio" type="text" ng-model="$ctrl.edited.bio">
            </label>
            <button ng-click="$ctrl.updateInfo(); $location.path('/user_profile');">Update</button>
        </form>
    </section>
    `,
    controller: ['DataService', function(DataService) {
        const vm = this;

        vm.onSubmit = (edited) => {
            console.log("Submit: ");
            console.log(edited);
            DataService.setUserProfile(edited);
        };
    }]

}

angular.module('app').component('editProfile', editProfile);