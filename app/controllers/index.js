import Ember from 'ember';

export default Ember.Controller.extend({

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  emailAddress: '',

  actions: {

    saveInvitation() {

      // newLibrary.save().then(() => this.transitionTo('libraries'));
      // newInvitation.save().then(function() {
      //   this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
      //   this.set('emailAddress', '');
      // })

      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }
});
