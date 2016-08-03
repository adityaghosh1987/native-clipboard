var customClipboardClass = (function() {

	//Class Instance stores a reference to the Singleton
	var classInstance;

	function init() { // Singleton Class
		return {
			selectNodeText: selectNodeText,
			clipboardCopy: clipboardCopy
		};

		function selectNodeText(targetElement) {
			var selectedText;

			if (targetElement.nodeName === 'INPUT' || targetElement.nodeName === 'TEXTAREA') {
				targetElement.focus();
				targetElement.setSelectionRange(0, targetElement.value.length);

				selectedText = targetElement.value;
			} else {
				if (targetElement.hasAttribute('contenteditable')) {
					targetElement.focus();
				}

				var selection = window.getSelection();
				var range = document.createRange();

				range.selectNodeContents(targetElement);
				selection.removeAllRanges();
				selection.addRange(range);

				selectedText = selection.toString();
			}

			return selectedText;
		}

		/**
		 * @param {element node object}
		 * @return {object}
		 */
		function clipboardCopy(targetElement) {
			var action = 'copy',
				selectedText = selectNodeText(targetElement),
				succeeded = false;
			try {
				succeeded = document.execCommand(action);
			} catch (err) {
				succeeded = false;
			}
			return {
				succeeded: succeeded,
				selectedText: selectedText
			};
		}
	};

	function getClassInstance() {
		if (!classInstance) {
			classInstance = init();
		}
		return classInstance;
	}

	return {
		// Get the Singleton instance if one exists
		// or create one if it doesn't
		getInstance: getClassInstance
	};
})();
