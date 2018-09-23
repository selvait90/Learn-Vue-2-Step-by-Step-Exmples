Vue.component('coupen', {
	props: ['code'],
	template: `	
			<input type="text" :value="code" @input="updateCode($event.target.value)" ref="ccode">
	`,
	data() {
		return {
			expiredCodes: ['ALLFREE', 'FREE2018']
		}
	},
	methods: {
		updateCode(code) {
			// VALIDATION AND SANITATIN

			if(this.expiredCodes.includes(code)) {
				alert('Expired')
				this.$refs.ccode.value = code = ''
			}
			this.$emit('input', code)
		}
	}
});

new Vue({
	el: '#root',
	data: {
		coupen: "FREEBIE"
	},
	methods: {

	}
})
