import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(book) {
      book.save();
    }
  }
});