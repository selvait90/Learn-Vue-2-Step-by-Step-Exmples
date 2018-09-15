// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('modal', {
	props: ['title', 'body'],
	template: `
	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        {{body}}
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	        <button type="button" class="btn btn-secondary" @click="$emit('close')">Custom Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	`
});

// https://www.quora.com/How-does-Bootstrap-modal-work
new Vue({
	el: '#root',
	methods: {
		showModal: function() {
			$('#exampleModal').modal('show');
		},
		closeModal: function() {
			$('#exampleModal').modal('hide');
		}

	}
})
