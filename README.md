# native-clipboard
Copying text to the clipboard

## Install
You can install this package either with `npm` or with `bower`.


### npm

```shell
npm install native-clipboard
```

Then add a `<script>` to your `index.html`:

```html
<script src="/node_modules/native-clipboard/native-clipboard.js"></script>
```

### bower

```shell
bower install native-clipboard
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/native-clipboard/native-clipboard.js"></script>
```

## How to use it :

### 1. Get instance of copyclipboard:
```javascript
var customClipboard = customClipboardClass.getInstance();
```

### 1. Call to copy content:
```javascript
/**
* @targetElement{DOM Object}{mandatory} : DOM element object of text container.
*/
customClipboard.clipboardCopy(targetElement);

/*Example*/
function copyClipboard() {
	var targetElement = document.getElementById('target-element-id');
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
```

### Browser Support
Chrome 42+, Firefox 41+, IE 9+, Opera 29+
