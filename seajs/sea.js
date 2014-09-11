(function(global, undefined){

	var data = seajs.data = {};
	
	var seajs = global.seajs = {};

	var doc = document;
	var DIRNAME_RE = /[^?#]*\//;

	function dirname(path){
		return path.match(DIRNAME_RE)[0];
	}

	
	//获取路径
	var cwd = (!location.href || location.href.indexOf('about:') === 0) ? '' : dirname(location.href);
	var scripts = doc.scripts;
	
	var loaderScript = doc.getElementById("seajsnode") || 
						scripts[scripts.length - 1];
	
	function getScriptAbsoluteSrc(node) {
	  return node.hasAttribute ? // non-IE6/7
		  node.src :
		// see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
		  node.getAttribute("src", 4)
	}
	
	//获取当前加载页面的路径：使用脚本地址，如果内嵌方式使用当前页面地址
	var loaderDir = dirname(getScriptAbsoluteSrc(loaderScript) || cwd);
	
	data.base = loaderDir;
	data.dir = loaderDir;
	data.cwd = cwd;
	data.charset = 'utf-8';
	
	seajs.config = function(configData){
		for( var key in configData ){
			var curr = configData[key];
			var prev = data[key];
		}
	}
})(this);
