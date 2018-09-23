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
	</style>

18. Vue Ajax Requests With Axios

	package.json

	  "dependencies": {
	    "vue": "^2.5.17",
	    "axios": "^0.18.0"
	  },

	- Include axios into package.json by specifying --save option
	$ npm install axios --save

	https://github.com/axios/axios
	main.js
		import axios from 'axios'
		window.axios = require('axios');


19. Object-Oriented Forms: Part 1

	API - Rails Application in API mode
	Form - Used bootstrap		

	* Follow Object Oriented methods to handle error messages (Class Error ())

	$ rails new form-api --api
	$ cd form-api
	$ bundle install
	$ bin/rake db:setup

	bin/rails g scaffold project name description
	rails db:migrate
	rails s

	no 'access-control-allow-origin' header is present on the requested resource
	- Gemfile
		# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
		gem 'rack-cors'

	- cors.rb
		https://til.hashrocket.com/posts/4d7f12b213-rails-5-api-and-cors
		origins 'localhost:8080'

	Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
		https://github.com/axios/axios/issues/118#issuecomment-313815318
		import axios from 'axios'
		And use Axios normally without using Vue.use(axios)

	Uncaught TypeError: self.postMessage is not a function
		https://github.com/webpack/webpack-dev-server/issues/792#issuecomment-341110726
		var self = this in axios usage



	$event.target.name -> current dom
	object.hasOwnProperty(field)

	Unexpected console statement (no-console) at
	https://eslint.org/docs/rules/no-console
	package.json
	  "eslintConfig": {
	    "rules": {
	      "no-console": "off"
	    },



20. Object-Oriented Forms: Part 2

	API - Rails Application in API mode
	Form - Form class used

	* Follow Object Oriented methods to process form data (Class Form ())

21. Object-Oriented Forms: Part 3
	Refactoring

22. Webpack Config From Scratch

	
	* Start Rails server at 019
		$ rails s
	* Build vue components
		$ npm run wprod
	* Run local server
		$ python -m SimpleHTTPServer
	* Access application
		localhost:8000

	============================================================
	$ vue create vue-webpack
	$ cd vue-webpack
	$ vi webpack.config.js
	$ ./node_modules/.bin/webpack --mode=development
	$ npm install webpack --save-dev
	$ npm install webpack-cli --save-dev
	$ npm install axios --save
	$ npm install css-loader --save-dev
	$ npm install vue-style-loader --save-dev


	Vue SFC processing
	https://vue-loader.vuejs.org/guide/#manual-configuration

	Bundle & Global Access
		npm install axios --save-dev
		import axios from 'axios'
		window.axios = axios // global expose


	* Install webpack
		npm install webpack@version --save-dev
		+ webpack@2.7.0
	* Config file
		webpack.config.js
	* Test configuration
		./node_modules/.bin/webpack
	* Entry Point
		let webpack = require('webpack')
		let path = require('path')
		module.exports = {
			entry: './src/assets/app.js',
			output: {
				path: path.resolve(__dirname, 'public/js')
				filename: 'bundle.js'
				publicPath: './cdnpath'
			}
		}
	* Hide modules and watcher
		./node_modules/.bin/webpack --hide-modules --watch
	ERROR in ./src/App.vue
		Module parse failed: /Users/selva/sideprojects/vuejs/practice/022-webpack-config-from-scratch/webpack-app/src/App.vue Unexpected token (1:0)
		You may need an appropriate loader to handle this file type.
	bash-3.2$ npm install --save-dev vue-loader vue-template-compiler vue-style-loader css-loader --save-dev
	npm install --save-dev style-loader

	Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
		./babel.config.js:module.exports = {

		https://stackoverflow.com/questions/47720354/how-can-i-fix-webpack-related-error-cannot-assign-to-read-only-property-export
	============================================================
24. Shared State 101
	Defined generic variable outside Vue instances and access from multiple vue instances

25. Custom Input Components


26. Vue SPA Essentials: Routing

	$ vue create vue-route-app
	
	$ npm install vue-router --save-dev
	Failed to mount component: template or render function not defined.
	https://github.com/vuejs/vue-router/issues/1882#issuecomment-344504483

	$ rails new stream-spa-api --api
	$ cd stream-spa-api
	$ bundle install
	$ bin/rake db:setup

	bin/rails g scaffold user name email
	bin/rails g scaffold status user:references body
	rails db:migrate
	rails s

