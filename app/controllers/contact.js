import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),

  isEnabled: Ember.computed.and('emailIsValid', 'messageIsValid'),
  isDisabled: Ember.computed.not('isEnabled'),

  actions: {

  }

});
