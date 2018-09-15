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

new Vue({
	el: '#root'
})
