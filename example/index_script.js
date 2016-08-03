'use strict';
var customClipboard = customClipboardClass.getInstance();

function copyClipboard() {
	var targetElement = document.getElementById('contentWrapper');
	try {
		var actionData = customClipboard.clipboardCopy(targetElement);
		status = (actionData.succeeded) ?
			'Copied to clipboard' :
			'Please press (CTRL + C) to copy this content';
	} catch (err) {
		status = err.message;
	}
	alert(status);
}
