import DS from 'ember-data';
import Faker from 'faker';

let BookCategories = ['Cookbook', 'Guide', 'Tutorial'];

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),
  library: DS.belongsTo('library'),
  author: DS.belongsTo('author'),

  randomize(author, library) {
    this.set('title', this._bookTitle());
    this.set('author', author);
    this.set('releaseYear', this._randomYear());
    this.set('library', library);

    return this;
  },

  _bookTitle() {
    var randomCategory = BookCategories[Math.floor(Math.random() * BookCategories.length)];
    return `${Faker.commerce.productName()} ${randomCategory}`;
  },

  _randomYear() {
    return new Date(this._getRandomArbitrary(1900,2017).toPrecision(4));
  },

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
});
