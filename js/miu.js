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
 *  Open and Close function
 */
function openEditor() {
	window.open("http://shaofantasy.cn/MiuOnline", "Miu Online - New File");
}

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
 *  Save file function
 */
function saveFile() {
	var content = document.getElementById('editor');
	var uriContent = "data:application/octet-stream," + encodeURIComponent(conent.value);
	window.open(uirContent, 'Save file as');
}