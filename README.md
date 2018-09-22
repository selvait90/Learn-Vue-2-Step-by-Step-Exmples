* Learning Vue 2
	https://laracasts.com/series/learn-vue-2-step-by-step

* Install Vue.js syntax highlighter in sublime
	https://medium.com/@kentaguilar/install-vue-syntax-highlighting-via-package-control-on-sublime-text-2-bfb977f444e7

* Vue Directives
	v-model
	v-for
	v-text
	v-on:click | @click
	v-on:click="addName" | @click="addName"
	v-on:keyup.enter | @keyup.enter
	v-bind:title | :title
	v-bind:class | :class
	v-bind:class="className" | :class="className"
	v-bind:class="{'color-red' : isColorRed}" | :class="{'color-red' : isColorRed}"
	v-bind:disabled="isDisabled" | :disabled="isDisabled"
	v-show
	v-if


* Vue Structure

	var app = new Vue({
		el: '#root',
		data: {
			names: ['Ram', 'Kans', 'Selva']
		},

		computed: {
			reverseMessage() {
			}
		}

		methods: {
			addName: function() {

			}
		}
	
		mounted() {
			// executed earlier
		}

		created() {
			this.tabs = this.$children;
		}

	})

* Slots and Named Slots
	template: `
		<slot name="header"></slot>  
		<slot></slot>
	`
	<component>
		<template slot="header">Content to header slot</template>
		Content to default slot
	</component>

* Vue Component
	Vue.component('task-list', {
		template: '<div><task v-for="task in tasks" v-text="task.task" :key="task.task"></task></div>',
		data() {
			return {
				tasks : [
					{ task: 'Learn Vue', completed: true},
					{ task: 'Build app using Vue', completed: true},
					{ task: 'Share Vue knowledge', completed: true},
				]
			}
		}

	});

	Vue.component('task', {
		template: '<li><slot></slot></li>'
	});


	<message title="Component Title 1" body="Body of the Component 1"></message>
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
				this.$emit('functionName', data)
				this.$on('functionName', callback)
			}
		}

	});


	- inline-template

* emit event - component
	<button type="button" class="btn btn-secondary" @click="$emit('close')">Custom Close</button>
	<modal title="Component Title 1" body="Body of the Component 1" @close="closeModal"></modal>


* Custom Event Dispatcher

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


	Event.fire('applied', 'CodeXCustomEventDispatcher')
	Event.listen('applied', function(value) {
		alert("Coupen Applied : " + value)
	})



16. Webpack and vue-cli FREE
	https://vue-loader.vuejs.org/
	vue-loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs)

	<template>
	  <div class="example">{{ msg }}</div>
	</template>

	<script>
	export default {
	  data () {
	    return {
	      msg: 'Hello world!'
	    }
	  }
	}
	</script>

	<style>
	.example {
	  color: red;
	}
	</style>


	https://cli.vuejs.org/
	$ sudo npm install -g @vue/cli
	$ vue create my-app

	$ cd my-app
	$ npm run serve

	- Watch out for lint messages

	# Lints and fixes files
	$ npm run lint


17. Hot Module Replacement FREE

	Hot modules features to update template while maintaining the state of JavaScript variables

	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>
