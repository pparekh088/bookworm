import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('books', function () {
		this.route('book',{path: ':book_id'});//book/3
		this.route('new');
	});
});

export default Router;
