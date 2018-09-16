function EventClass() {
	this.vue = new Vue();
}

EventClass.prototype.fire = function(event, data = null) {
	this.vue.$emit(event, data )
}

EventClass.prototype.listen = function(event, callback) {
	this.vue.$on(event, callback)
}

window.Event = new EventClass()

Vue.component('coupen', {
	template: '<input @blur="coupenApplied">',
	methods: {
		coupenApplied: function() {
			Event.fire('applied', 'CodeXCustomEventDispatcher')
		}
	}
});

new Vue({
	el: '#root',
	created() {
		Event.listen('applied', function(value) {
			alert("Coupen Applied : " + value)
		})
	}
})
