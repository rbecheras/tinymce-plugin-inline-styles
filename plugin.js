/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('inlinestyles', function(editor) {

	function forceInline(evt){
		// var content = editor.getContent();
		var content = editor.getDoc();
		var parsed = $(content)[0];

		console.log(parsed);
		inlineStyles(parsed);
	}

	// var $ = tinymce.dom.DomQuery;

	editor.on('SetContent', forceInline);

	// editor.on('BeforeSetContent', function(){});
	// editor.on('GetContent', function(){});
});
