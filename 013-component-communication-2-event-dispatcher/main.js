window.Event = new Vue();

Vue.component('coupen', {
	template: '<input @blur="coupenApplied">',
	methods: {
		coupenApplied: function() {
			Event.$emit('applied', 'CodeXEventDispatcher')
		}
	}
});

new Vue({
	el: '#root',
	created() {
		Event.$on('applied', function(value) {
			alert("Coupen Applied : " + value)
		})
	}
})
