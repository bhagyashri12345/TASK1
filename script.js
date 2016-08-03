
var pair,x,s2,div;
  // var newElem = document.createElement("BR");

function showHint(str) {
  var xhttp;
  

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    // alert('onchange');
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // document.getElementById("txtHint").innerHTML = "";
      // s2=document.getElementById("txt1");
 // document.getElementById("txt1").innerHTML += "</br>document.createElement('txt1')";
      pair = xhttp.responseText;
      x=JSON.parse(pair);
      console.log(x.Response);
      // if(x.Response == 'True'){
      // console.log(x.Search.length);
      // }
      // // // console.log(x.Search.length);
if (x.Response == 'False') {
   var div = document.getElementById('my-div');
       div.style.display = 'none';

    // alert(hii);
  }
      // console.log(x.Search[0]['Title'])
      // console.log(x.length())
if (x.Response != 'False') {

      for (var i=0; i<x.Search.length;i++){
      // var new1 = document.createElement("option");
      // new1.value=x.Search[i]['imdbID']
      // new1.innerHTML=x.Search[i]['Title'];
      // s2.options.add(new1);
       div = document.getElementById('my-div');
      div.style.display = 'block';
       var newElement = document.createElement('li');
      console.log(newElement);
      newElement.textContent = x.Search[i]['Title'];
      
      var list = document.getElementById('my-list');
      // list.appendChild(newElem);
      list.appendChild(newElement);

    }
  }
    }
  };document.getElementById('my-list').innerHTML = "";

  xhttp.open("GET", " http://www.omdbapi.com/?s="+str, true);
  xhttp.send();
}
