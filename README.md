# smart-template-injector
You can process an template injecting stretches of anything with an context object.  

  
## Usage  

```
npm install smart-template-injector
```

### Selectors
You can use basically on pattern to select inject tag:  
* `/*inject:*/`  
  
After of `:` you can put the property name of the object what you want to use.  
  
### Simple example  

```javascript
var smartTemplateInjector = require('smart-template-injector');

var template = ""
	+ "/*inject:libs*/\n"
	+ "\n"
	+ "var smartSomeFunction = {\n"
	+ "	someFunction: SomeFunction\n"
	+ "};\n"
	+ "\n"
	+ "module.exports = smartSomeFunction;\n"
	+ "\n"
	+ "function SomeFunction() {\n"
	+ "	console.log('All right.');\n"
	+ "};\n"
	+ "\n"
	+ "/*inject:function*/\n";

var obj = {
	libs: "var path = path || require('path');\nvar fs = fs || require('fs');",
	function: "function AnotherFunction() {\n	console.log('All ok.');\n};"
};  

console.log(smartTemplateInjector.inject(template, obj));
  
```  

### Anyway we can go more deep and complex 

```javascript
var smartTemplateInjector = require('smart-template-injector');

var template = ""
	+ "/*inject:module.libs*/\n"
	+ "\n"
	+ "var smartSomeFunction = {\n"
	+ "	someFunction: SomeFunction\n"
	+ "};\n"
	+ "\n"
	+ "module.exports = smartSomeFunction;\n"
	+ "\n"
	+ "function SomeFunction() {\n"
	+ "	console.log('All right.');\n"
	+ "};\n"
	+ "\n"
	+ "/*inject:module.function*/\n";

var obj = {
	module: {
		libs: "var path = path || require('path');\nvar fs = fs || require('fs');",
		function: "function AnotherFunction() {\n	console.log('All ok.');\n};"
	}
};  

console.log(smartTemplateInjector.inject(template, obj));
  
```  
  
### News  
0.0.1 Project start.  
  
Danke  
  