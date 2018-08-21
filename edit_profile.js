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
                <textarea class="input__bio" type="text" ng-model="$ctrl.edited.bio"></textarea>
            </label>
            <button class="btn__update">Update</button>
        </form>
    </section>
    `,
    controller: ['DataService', '$location', function(DataService, $location) {
        const vm = this;

        vm.edited = DataService.getUserProfile();

        vm.onSubmit = (edited) => {
            console.log("Submit: ");
            console.log(edited);
            DataService.setUserProfile(edited);
            $location.path('/user_profile');
        };
    }]

}

angular.module('app').component('editProfile', editProfile);