// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('message', {
	props: ['title', 'body'],
	template: `
		<div class="alert alert-success" role="alert" v-show="isVisible">
			<h4 class="alert-heading">{{title}} <button @click="hideModal">X</button></h4>
			<p>{{body}}</p>
		</div>
	`,
	data() {
		return {
			isVisible : true
		}
	},
	methods: {
		hideModal: function() {
			this.isVisible = false;
		}
	}

});

new Vue({
	el: '#root'
})
