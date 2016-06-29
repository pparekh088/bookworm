import Ember from 'ember';
import DS from 'ember-data';
import validator from 'npm:validator';

export default Ember.Component.extend({
	buttonLabel: function(){
		return (this.get('book').id)? 'Update Book' : 'Add Book'; 
	}.property(),

	actions:{
		submit: function () {
			if(this.validate()){
				this.sendAction('action',this.get('book'));
			}
		},
		validateTitle(value){
			this.validateTitle(value);
		},
		validateAuthor(value){
			this.validateAuthor(value);
		},
		validateDescription(value){
			this.validateDescription(value);
		}
	}, 

	validate(){
		this.set('errors',DS.Errors.create());
		this.validateTitle(this.get('book.title'));
		this.validateTitle(this.get('book.author'));
		this.validateTitle(this.get('book.description'));
		return this.get('errors.isEmpty');
	},
	validateAuthor(value){
		this.get('errors').remove('author');
		if(validator.isNull(value)){
			this.get('errors').add('author','Cannot be empty');
		}
	},
	validateDescription(value){
		this.get('errors').remove('description');
		if(validator.isNull(value)){
			this.get('errors').add('description','Cannot be empty');
		}
	},
	validateTitle(value){
		this.get('errors').remove('title');
		if(validator.isNull(value)){
			this.get('errors').add('title','Cannot be empty');
		}
	}
});