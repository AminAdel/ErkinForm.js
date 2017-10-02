//---> Create	:	1396.07.08
//---> Finish	:	1396.07.10
//---> Update	:	--
/*****************************/
$(document).ready(function () {
	if ($('.ErkinForm').length > 0) {
		ErkinForm = new class_ErkinForm();
	}
});

function class_ErkinForm () {
	
	var self = this;
	
	/*****************************/
	
	this.init = function() {
		self.handler();
	}
	
	/*****************************/
	
	this.handler = function() {
		$('.ErkinForm .submit').click(function(e) {
			if (e.which != 1) return;
			
			var form = self.findForm($(this));
			var formId = self.create_form(form);
		});
	} //done
	
	this.findForm = function (clickedElement) {
		var form = clickedElement;
		var i = 0;
		while (i < 10) {
			form = $(form).parent();
			if ($(form).hasClass('ErkinForm')) break;
			i++;
		}
		return form;
	} //done
	
	this.create_form = function(form) {
		var form_method = $(form).data('method');
		var form_action = $(form).data('action');
		var form_id = self.getFormId(form); // get/set an id for form
		$('form[data-id='+form_id+']').remove(); // prevents creating multiple extra forms;
		var fieldValues = self.getFieldValues(form); // get all form fields and values;
		
		$('body').append('<form method="' + form_method + '" action="' + form_action + '" data-id="' + form_id + '">' + fieldValues + '</form>');
		$('form[data-id='+form_id+']').submit();
	} //done
	
	this.getFormId = function(form) {
		var formId = $(form).attr('id');
		if (isEmpty(formId)) {
			formId = self.getNewId();
			$(form).attr('id', formId);
		}
		return formId;
	} //done
	
	this.getNewId = function() {
		var i = 1;
		while (i <= 10) {
			if ($('#ErkinForm_' + i).length == 0) break;
			i++;
		}
		return 'ErkinForm_' + i;
	} //done
	
	this.getFieldValues = function(form) {
		/**
		 * remember : this function doesn't send unchecked radio buttons;
		 */
		var html = '';
		
		// get text inputs :
		var inputs = $(form).find('input');
		for (var i = 0; i < inputs.length; i++) {
			var $this, $type, $name, $value;
			$this = $(inputs[i]);
			$type = $($this).attr('type');
			if ($type == 'checkbox' || $type == 'radio') continue;
			$name = $($this).attr('name');
			$value = $($this).val();
			html += '<input type="hidden" name="' + $name + '" value="' + $value + '">' + "\n";
		}
		
		
		// get checkboxes :
		var checkboxes = $(form).find('input[type=checkbox]');
		for (var i = 0; i < checkboxes.length; i++) {
			var $this, $type, $name, $value;
			$this = $(checkboxes[i]);
			$name = $($this).attr('name');
			if ($($this).is(':checked')) {
				$value = 1;
			} else {
				$value = 0;
			}
			html += '<input type="hidden" name="' + $name + '" value="' + $value + '">' + "\n";
		}
		
		
		// get radio buttons : {remember : this gets only checked radios}
		var radios = $(form).find('input:radio:checked');
		for (var i = 0; i < radios.length; i++) {
			var $this, $type, $name, $value;
			$this = $(radios[i]);
			$name = $($this).attr('name');
			$value = 1;
			html += '<input type="hidden" name="' + $name + '" value="' + $value + '">' + "\n";
		}
		
		
		// get selects :
		var selects = $(form).find('select');
		for (var i = 0; i < selects.length; i++) {
			var $this, $type, $name, $value;
			$this = $(selects[i]);
			$name = $($this).attr('name');
			$value = $($this).val();
			html += '<input type="hidden" name="' + $name + '" value="' + $value + '">' + "\n";
		}
		
		
		// get textareas :
		var textareas = $(form).find('select');
		for (var i = 0; i < textareas.length; i++) {
			var $this, $type, $name, $value;
			$this = $(textareas[i]);
			$name = $($this).attr('name');
			$value = $($this).val(); // todo : check if works
			html += '<input type="hidden" name="' + $name + '" value="' + $value + '">' + "\n";
		}
		
		return html;
	} //done
	
	/*****************************/
	// After All Methods :
	var __construct = function(that) {
		that.init();
	}(self)
}
