/* Live preview 
 * 
 * Reference: markdown-js (https://github.com/evilstreak/markdown-js)
 *
 */

function Editor(input, preview)	{
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    }
    input.editor = this;
    this.update();
}

var $ = function (id) { return document.getElementById(id); };
new Editor($("editor"), $("preview"));

/*
 *  Close function
 */
function closeEditor() {
	if(confirm("Sure to close?") == true) {
		window.opener = null;
		window.open('', '_self');
		window.close();
		return true;
	} else {
		return false;
	}
}

/*
 *  
 *  
 */
function saveFile() {
	
}