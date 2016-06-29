import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            books: this.store.findAll('book')
        });
    },

    setupController(controller, models) {
        return controller.setProperties(models);
    }, 

    actions:{
    	deleteBook(book){
			var	_this = this;
			book.destroyRecord().then(function(){
				_this.transitionTo('books');
			});
		}
    }
});
