Vue.component('coupen', {
	template: '<input @blur="coupenApplied">',
	methods: {
		coupenApplied: function() {
			this.$emit('applied', 'CodeX')
		}
	}
});

new Vue({
	el: '#root',
	data: {
		isApplied : false,
		coupenCode: ''
	},
	methods: {
		notifyApplied: function(value) {
			alert("Coupen Applied : " + value)
			this.coupenCode = value
			this.isApplied = true
		}
	}
})
