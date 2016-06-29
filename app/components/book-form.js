import Ember from 'ember';
import DS from 'ember-data';
import validator from 'npm:validator';

export default Ember.Component.extend({

	errors: DS.Errors.create(),
	buttonLabel: function(){
		return (this.get('book').id)? 'Update Book' : 'Add Book'; 
	}.property(),

	actions:{
		submit: function () {
			if(this.validate()){
				this.sendAction('action',this.get('book'));
			}
		}
	}, 

	validate(){
		this.set('errors',DS.Errors.create());
		if(validator.isNull(this.get('book.title'))){
			this.get('errors').add('title','Cannot be empty');
		}
		if(validator.isNull(this.get('book.author'))){
			this.get('errors').add('author','Cannot be empty');
		}
		if(validator.isNull(this.get('book.description'))){
			this.get('errors').add('description','Cannot be empty');
		}
		return this.get('errors.isEmpty');
	}
});