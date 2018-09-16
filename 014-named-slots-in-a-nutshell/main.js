// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('modal', {
	template: `
	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">
	        	<slot name="title"></slot>
	        </h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <slot></slot>
	      </div>
	      <div class="modal-footer">
	      	<slot name="footer"></slot>
	      </div>
	    </div>
	  </div>
	</div>
	`
});

// https://www.quora.com/How-does-Bootstrap-modal-work
new Vue({
	el: '#root',
})
