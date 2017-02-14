import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),

  isEnabled: Ember.computed.and('emailIsValid', 'messageIsValid'),
  isDisabled: Ember.computed.not('isEnabled'),

  actions: {
    saveContact() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then(() => {
        this.set('responseMessage', `Thank you! We saved your contact message`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }

  }

});
