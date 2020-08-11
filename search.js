function search() {
  var input = document.getElementById('searchbar').value;
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
}
