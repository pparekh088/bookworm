import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),
	model(){
		return Ember.Object.create({ identification: '',password:''});
	},

	setupController(controller, model){
		controller.set('credentials',model);
	},

	actions:{
		authenticate(credentials){
			var _this = this;
			this.get('session').authenticate('authenticator:jwt',credentials).then(function(){
				_this.transitionTo('books');
			});
		}
	}

});