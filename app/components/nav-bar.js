import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		logout: function () {
				console.log(this.Route);
				this.get('session').invalidate();
			}
		}
});