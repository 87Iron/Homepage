function search() {
  var input = document.getElementById('searchbar').value;
  var button = document.getElementById('searchbtn');
  var searchbox = document.getElementById('searchbar');
  
  button.addEventListener("click", function(){
    console.log(input);
    var spl = input.split(" ");
    var webresult = "https://www.google.com/search?q=";
    webresult = webresult + spl[0]
    if(spl.length > 1){
      for(i=1; i<spl.length; i++) {
        webresult = webresult + "+"
        webresult = webresult + spl[i]
      }
    }
    window.location.href=webresult;
  });
  searchbox.addEventListener("keyup", function(event){
    if(event.keycode == 13) {
      button.click();
    }
  });
}
