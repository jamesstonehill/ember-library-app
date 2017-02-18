import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  startingText: "",
  // text: 'test save',

  actions: {
    edit(item) {
      this.set('isEditing', true);
      console.log(item);
      console.log(this);
    },
    cancelEdit() {
      this.set('isEditing', false);
    },
    saveAction() {
      console.log("SAVE");

      this.sendAction('saveAction',this.text);
      this.set('isEditing', false);
    }
  }
});
