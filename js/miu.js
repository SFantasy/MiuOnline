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
	var fileName = prompt("Input file name: ");

	/* 
	Reference:
	http://stackoverflow.com/questions/12718210/how-to-save-file-from-textarea-in-javascript-with-a-name 
	*/
	var Download = {
	    click : function(node) {
	        var ev = document.createEvent("MouseEvents");
	        ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	        return node.dispatchEvent(ev);
	    },
	    encode : function(data) {
	            return 'data:application/octet-stream;base64,' + btoa( data );
	    },
	    link : function(data, name){
	        var a = document.createElement('a');
	        a.download = name || self.location.pathname.slice(self.location.pathname.lastIndexOf('/')+1);
	        a.href = data || self.location.href;
	        return a;
	    }
	};
	Download.save = function(data, name){
	    this.click(
	        this.link(
	            this.encode( data ),
	            name
	        )
	    );
	};

	Download.save($("editor").value, fileName);
}