var smartTemplateInjector = {
	inject: Inject
};

module.exports = smartTemplateInjector;

function Inject(template, contextObj) {
	
	if(!!!template) {
		return "";
	} else if(!!!contextObj) {
		return template;
	}

	var os = os || require('os');

	// This get the tags by /*inject:*/ with one group
	//return template.replace(/\/\*inject:([\w\s]*)\*\//igm,
	// This get the tags by /*inject:*/ with two groups. | Como tem 2 grupos, p1 é o primeiro e p2 o segundo
	return template.replace(/([\t ]*)\/\*inject:([\w\.\s]*)\*\//ig,
 
		function (str, p1, p2, offset, s) {
			
			var retorno = deepFind(contextObj, p2);
			
			if (retorno != null) {
				return p1 + retorno + os.EOL + str;
			} else {
				return str;
			}
		});
};

function deepFind(obj, path) {
	
	var paths = path.split('.');
	
	var currentObj = obj;

	for (var i = 0; i < paths.length; ++i) {
		if (currentObj[paths[i]] == undefined) {
			return undefined;
		} else {
			currentObj = currentObj[paths[i]];
		}
	}
	
	return currentObj;
};
