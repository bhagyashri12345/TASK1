var s = -1;
var selected,a;
$(document).ready(function(){
	// console.log($("ul li"))
	
    		


    $("#txt1").keyup(function(str){
    	// alert("jhedg")
    	var sel=$(".something");
    	$("#txt1").attr('class',"loading");
    	if(str['target']['value']==""){$("#my-div").attr('class','hidden');
    		$("#txt1").attr('class',"");
    }
    if(str.keyCode!=13&&str.keyCode!=38&&str.keyCode!=40&&str.keyCode!=37&&str.keyCode!=39&&str['target']['value']!=""){
    	console.log(str.keyCode)

   	$.get("http://www.omdbapi.com/?s="+str['target']['value'],showHint);
   
   }
   	function showHint(data,status){
   		s=-1;
   		 a = data;
    		$("#my-list").empty();
     		$("#info").attr('class','hidden');
     		 if(data.Response=="False"){
     		 	$("#my-div").attr('class','hidden');
     		 	$("#found").attr('class','visible');
     		 	$("#found>p").text("Data Not found");
     		 }
     		if(status!="success"){
     			$("#txt1").attr('class',"");
     		}
     		if(status=="success"){
     			$("#txt1").attr('class',"");
    		for(var i=0;i<a.Search.length;i++){
     			$("#my-div").attr('class','visible');
     			$("#found").attr('class','hidden');
				// console.log(a.Search[i]['imdbID'])
    			 var line =  $("li");

     			$("#my-div ul").append($("<li>").attr('id',a.Search[i]['imdbID']).text(a.Search[i]['Title']).attr('class','something'));
    		}

    		$(".something").click(function(e){
    				$("#txt1").attr('class',"");
    			$("#txt1").val(e['target']['textContent']);
    			// console.log(value)
    			$("#my-div").attr('class','hidden');
    			$("#info").toggleClass('hidden').addClass("loading1");
    		$.get("http://www.omdbapi.com/?i="+this.id,function(value,Response){
    			$("#txt1").attr('class',"");
    		
    				movie_info(value);
    		});
    	});
   	}
}
//     		
//     		
    		
    		if(str.which==40){
    				$("#txt1").attr('class',"");
    			$("#info").attr('class','hidden');
    			$("#my-div").attr('class','visible');
    			$("#found").attr('class','hidden');
    			s++;
    			upDown(s);
    			if(s==a.Search.length){
    				selected.removeClass('selected');
    				$(sel[s-1]).removeClass('selected');
    				s=0;
    				selected =  $(sel[s]);
    				$(sel[s]).addClass('selected');

    			}

    			$("#txt1").val(sel[s].textContent);
    		}
     		if(str.which==38){
     				$("#txt1").attr('class',"");
     			if(s<=-1){
     				$(sel[0]).removeClass('selected');
     				s=a.Search.length-1;
     				selected =  $(sel[s]);
     				$(sel[s]).addClass('selected');
     			}
    			$("#info").attr('class','hidden');
    			$("#my-div").attr('class','visible');
     				$("#found").attr('class','hidden');
     				upDown(s);
     				console.log(s)
     			 
     			
     			$("#txt1").val(sel[s].textContent);
     			s--;
     		}
     		// console.log($(selected).attr('id'))
     		if(str.which==13){
     				$("#txt1").attr('class',"");
     		if(s<=-1){
     			s=0;
     			selected =  $(sel[s]);
     			
     		}
     		if(s>=a.Search.length){
     			s=a.search.length-1;
     			selected =  $(sel[s]);


     		}
     		console.log(selected.attr('id'))
     			$.get("http://www.omdbapi.com/?i="+selected.attr('id'),function(value,Response){
     			// console.log(value)
     			$("#txt1").attr('class',"");
   			$("#my-div").attr('class','hidden');
     			$("#info").attr('class','visible');
     			movie_info(value);
    		});
    		}

    		// if(str.which==40){
    		// 	$("#info").attr('class','hidden');
    		// }
    	// console.log(str)
    	$("#search1").click(function(){
    		if($("#txt1")[0].value==""){
    			$("#my-div").attr('class','hidden');
    			$("#info").attr('class','hidden');
    			$("#my-list").empty();
    		}
    		else{
    		var sel=$(".something");
    			$("#txt1").attr('class',"").focus();
    			for(var i=0;i<$("li.something").length;i++){
    			if(($("#txt1")[0].value==$("li.something")[i].textContent)){
    				s=i;
    				selected =  $(sel[s]);
    				selected.addClass('selected');
    			}}
    	$("#my-div").attr('class','visible');
    	$("#found").attr('class','hidden');
    	$("#info").attr('class','hidden');}
    });
});
	function movie_info(value){
		if(value['Poster']=="N/A"){
    					value['Poster']="movie.jpg"
    				}

    			 $("#myimg").attr('src',value['Poster']).removeClass('hidden');
     			 $("#movieName").text("Movie:"+value['Title']).removeClass('hidden');
    			 $("#rated").text("Rated:"+value['Rated']).removeClass('hidden');
     			 $("#rel").text("Released:"+value['Released']).removeClass('hidden');
     			 $("#run").text("Runtime:"+value['Runtime']).removeClass('hidden');
     			 $("#rate").text("Rating:"+value['imdbRating']).removeClass('hidden');
    			 $("#plt").text("Plot:"+value['Plot']).removeClass('hidden');
    			 $("#info").removeClass("loading1");
	}
	function upDown(s){console.log(s);
		var sel=$(".something");
	selected =  $(sel[s]);
     			 selected.next().removeClass('selected');
     			 selected.prev().removeClass('selected');

     			selected.addClass('selected');}
    
});