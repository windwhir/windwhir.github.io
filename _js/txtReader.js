//输入框<input type="file" id="fileinput" accept=".txt" />
var txtcontent=0;
document.getElementById('fileinput').addEventListener('change', function(event) {  
  var txtfile = event.target.files[0];  
  if (txtfile) {  
    var reader = new FileReader();  
    reader.onload = function(txt) {  
      txtcontent = txt.target.result;
    };  
    reader.onerror = function(txt) {  
      console.error("Error! " + txt.target.error.code);  
    };  
    reader.readAsText(txtfile);
  }
})