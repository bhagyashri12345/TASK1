var doc = document.getElementById('txt1');
doc.addEventListener("keyup", showHint);
doc.addEventListener("click",showHint);
var pair,x,s2,div,info,y,movId,content,eleId;
var j=-1;
var s = document.getElementById('search1');

s.addEventListener("click", search);
var t = document.getElementById('my-div');

t.addEventListener("click", textHandler);

function textHandler(e){
  var txt = e['target']['textContent'];
  var info = document.getElementById('txt1');
  info.value=txt;
  var id = e['target']['id'];
   

var xhttp1 = new XMLHttpRequest();
       xhttp1.onreadystatechange = function(){
          if (xhttp1.readyState == 4 && xhttp1.status == 200) {
           var mydiv = document.getElementById('my-div');
           mydiv.className = "hidden";

           var infohide = document.getElementById('info');
           infohide.style.display = "block";
           
            console.log(mydiv);
              
              // console.log(x.Search[j]['imdbID'])
              info = xhttp1.responseText;
                y=JSON.parse(info);
                // console.log(y.Search[0]['Poster']);
                var img = document.getElementById('myimg');
                img.src = y['Poster'];
                var movname=document.getElementById('movieName');
                movname.textContent="Movie Name:"+y['Title'];
                // var lable = document.getElementsByTagName("li");
                console.log(movname);

                // lable[11].textContent+=
                var rate=document.getElementById('rated');
                rate.textContent="Rated:"+y['Rated'];
                var rels=document.getElementById('rel');
                rels.textContent="Released:"+y['Released'];
                var runt=document.getElementById('run');
                runt.textContent="Runtime:"+y['Runtime'];
                var rating=document.getElementById('rate');
                rating.textContent="Rating:"+y['imdbRating'];
                var plot=document.getElementById('plt');
                plot.textContent="Plot:"+y['Plot'];

                
           }
                // console.log(y.Search[0]);
               
        };
        
        
        xhttp1.open("GET", "http://www.omdbapi.com/?i="+id, true);
                 xhttp1.send();
    }



function search(str){
  console.log(str)
    
    movId=document.getElementById( str['target']['id']);
   // 
  

    var text=document.getElementById('txt1');
  
    text.value=content.value;
    text.focus();
  
  

       
    div = document.getElementById('my-div');
           div.className = "visible";
       var infohide = document.getElementById('info');
           infohide.style.display = "none"; 
        return;
    
    // if(str['target']['value']==""){
      
    //   // console.log(txt)
    // }
}
  function showHint(str) {
content=document.getElementById('txt1');
content.className="loading";
var infohide = document.getElementById('info');
infohide.style.display="none";

console.log(str['target']['value'])
     // console.log("this is str",str);
    if(str['target']['value']==""){
    
      div = document.getElementById('my-div');
            div.className = "hidden";
            content.className="";
            var infohide = document.getElementById('info');
            infohide.className="hidden";
    }
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      
        pair = xhttp.responseText;
        x=JSON.parse(pair);
        if (x.Response == 'False') {
           
            var txt = document.getElementById('txt1');
            txt.className="";
            var m = document.getElementById('my-div');
            m.className="hidden";
            // console.log(x)
          }
        var movie="movie";  
        if (x.Response != 'False')  {
          content.className="";
          var infohide = document.getElementById('info');
           infohide.style.display = "none";
          for (var i=0; i<x.Search.length;i++)  {
            j=0;
            // console.log(x.Search);
            div = document.getElementById('my-div');
            div.className = "";
            var newElement = document.createElement('li');
            newElement.setAttribute('id', x.Search[i]['imdbID'])
           
           // console.log(newElement);
            newElement.textContent = x.Search[i]['Title'];
            var list = document.getElementById('my-list');
            list.appendChild(newElement);
          }
        } 
      } 
    };
    switch(str.keyCode){
    case 40:
      content.className="";
      var infohide = document.getElementById('info');
      var m=document.getElementById("my-div");
      m.className="";
           infohide.style.display = "none";
      
      var ele = m.getElementsByTagName("li");
      
    eleId = ele[j].getAttribute("id");
  
      // if(j==x.Search.length)
      //     {j=0;}
      var a=document.getElementById(eleId);
      //var wb = document.getElementById('my-list');
        // var b=document.getElementById(eleId);
        //console.log("ele", ele[j-])
        for(var i=0;i<ele.length;i++){

          ele[i].style.backgroundColor="#ffffff";
        }
        
        // console.log(b)
      
    
     // console.log('movie'+j++);
     // a.focus();
     a.style.backgroundColor="#EEE";
     var txt = document.getElementById('txt1');
     txt.value=a.textContent;
     j++;
     if(j==ele.length){
      j=0;
     }
    break;
    case 38:
    

            content.className="";
      
           infohide.style.display = "none";
            var m=document.getElementById("my-div");
            m.className="";
           var ele = m.getElementsByTagName("li");
      
           eleId = ele[j].getAttribute("id");
           if(j==0)
          {var b=document.getElementById(eleId);
       b.style.backgroundColor="#ffffff";
            j=ele.length;}
            
      
      // console.log(j)
      
      for(var i=0;i<ele.length;i++){

          ele[i].style.backgroundColor="#ffffff";

        }
      var a=document.getElementById(eleId);
      a.style.backgroundColor="#EEE";
      var txt = document.getElementById('txt1');
      txt.value=a.textContent;
      j--;
      console.log(eleId)
    break;
    case 13:
    
      console.log(str['target']['id'])
content.className="";
var infohide = document.getElementById('info');

       var xhttp1 = new XMLHttpRequest();
       xhttp1.onreadystatechange = function(){
          if (xhttp1.readyState == 4 && xhttp1.status == 200) {
           var mydiv = document.getElementById('my-div');
           mydiv.className = "hidden";

           infohide.className="";
           infohide.style.display = "block";

           
            console.log(mydiv);
              
              // console.log(x.Search[j]['imdbID'])
              info = xhttp1.responseText;
                y=JSON.parse(info);
                // console.log(y.Search[0]['Poster']);
                var img = document.getElementById('myimg');
                img.src = y['Poster'];
                var movname=document.getElementById('movieName');
                movname.textContent="Movie Name:"+y['Title'];
                // var lable = document.getElementsByTagName("li");
                console.log(movname);

                // lable[11].textContent+=
                var rate=document.getElementById('rated');
                rate.textContent="Rated:"+y['Rated'];
                var rels=document.getElementById('rel');
                rels.textContent="Released:"+y['Released'];
                var runt=document.getElementById('run');
                runt.textContent="Runtime:"+y['Runtime'];
                var rating=document.getElementById('rate');
                rating.textContent="Rating:"+y['imdbRating'];
                var plot=document.getElementById('plt');
                plot.textContent="Plot:"+y['Plot'];

                
           }
                // console.log(y.Search[0]);
               
        };
        console.log(eleId)
        xhttp1.open("GET", "http://www.omdbapi.com/?i="+eleId, true);
                 xhttp1.send();
    }
    if(str['target']['value']!=""){
    if((str.key!='ArrowLeft')&&(str.key!='ArrowRight')&&(str.key!='ArrowUp')&&(str.key!='ArrowDown')&&(str.key!='Tab')&&(str.keyCode!=13)){
      document.getElementById('my-list').innerHTML = "";
      xhttp.open("GET", " http://www.omdbapi.com/?s="+str['target']['value'], true);
      xhttp.send();
   }return;}
}
