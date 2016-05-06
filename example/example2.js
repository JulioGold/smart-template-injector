var smartTemplateInjector = require('../smartTemplateInjector.js');

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
		libs: "var path = path || require('path');\nvar fs = fs || require('fs');\n",
		function: "function AnotherFunction() {\n	console.log('All ok.');\n};"
	}
};

console.log(smartTemplateInjector.inject(template, obj));
