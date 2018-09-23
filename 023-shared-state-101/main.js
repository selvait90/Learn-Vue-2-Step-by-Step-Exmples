let store = {
		user: {
			name: 'Selva'
		}		
	}

new Vue({
	el: '#one',
	data: {
			shared: store,			
			specific: 'Hello'
		}
})

new Vue({
	el: '#two',
	data: {
			shared: store,			
			specific: 'Hey'
		}
})
