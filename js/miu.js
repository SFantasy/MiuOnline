/* Live preview 
 * 
 * Reference: markdown-js (https://github.com/evilstreak/markdown-js)
 *
 */
var $ = function (id) { return document.getElementById(id); };

function Editor(input, preview)	{
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    }
    input.editor = this;
    this.update();
}

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
 *  Open file function 
*/
function openFile(files) {
	var file = files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var output = $("editor");
		output.textContent = e.target.result;
	};

	reader.readAsText(file);
}

function showFileInput() {
	var fileInput = $("fileInput");
	fileInput.click();
}

/*
 * Clear content function
*/
function clearContent() {
	$("editor").value = " ";
	$("editor").editor.update();
}

/*
 *  Save file function
 */
function saveFile() {
	var content = $('editor');
	var uriContent = "data:application/octet-stream," + encodeURIComponent(conent.value);
	window.open(uirContent, 'Save file as');
}