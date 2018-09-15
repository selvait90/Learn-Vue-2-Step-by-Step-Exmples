Vue.component('tabs', {
	template: `
		<div>

			<div class="tabs">
				<ul class="nav nav-pills">
				  <li class="nav-item" v-for="tab in tabs">
				    <a class="nav-link" :class="{active : tab.isActive}" @click="selectTab(tab)" href="#">{{tab.name}}</a>
				  </li>
				</ul>
			</div>


			<div class="tab-details">
				<slot></slot>
			</div>
		</div>
	`,
	data() {
		return {
			tabs: []
		}
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(function(tab) {
				tab.isActive = (tab.name === selectedTab.name)
			})
		}
	}
});

Vue.component('tab', {
	props: {
		name: {required: true},
		selected: {default: false}
	},
	data() {
		return {
			isActive: false
		}
	},
	mounted() {
		this.isActive = this.selected
	},
	template: '<div v-show="isActive"><slot></slot></div>'
})

new Vue({
	el: '#root'
})
