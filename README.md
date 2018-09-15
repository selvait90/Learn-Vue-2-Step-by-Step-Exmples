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

	})


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
