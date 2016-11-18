//var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var allAbsoluteLinks=[];
var last=0,pos=0,molecules=0,flagUndefined=0,p,flag1=0;
var arr=[];
var titles=[];
var ans = [];
var edges = [];

//var pageToVisit = "https://www.bloomberg.com/markets/currencies/cross-rates";
//https://www.bloomberg.com/markets/currencies/cross-rates



  var flag=0;
  var str=window.location.href;
  str=str.toString();
  var str=window.location.href;
  str=str.toString();
  var x=str.indexOf("=");
  var f=str.indexOf("&");
  var pageToVisit =str.substring(x+1,f);
  str=str.substring(f);
  x=str.indexOf("=");
  var molecule=str.substring(x+1);
  //var pageToVisit=document.getElementById("id1").value;
  var pageToVisit1=pageToVisit;
  //molecules=document.getElementById("id2").value;
  molecules=parseInt(molecule);
  p=document.getElementById("id1").innerHTML;
  titles.push("something");

var c=0,a=0;
console.log("Visiting page " + pageToVisit);
arr.push(pageToVisit);
var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + 
encodeURIComponent('select * from html where url="' + pageToVisit + '"') + '&format=html&jsonCompat=new&callback=?';
$.getJSON(yql, function(body) 
   {
   /*if(error) 
   {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);*/
   //if(response.statusCode === 200) 
   //{
     // Parse the document body
     console.log(body);
     console.log("got into function body");
     if (body.results.length == 0)
     {
        alert("enter another url");
     }
     else
     {
        
     body=body.results[0];
     //console.log(body);
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
     //console.log($('friends').text());
     collectInternalLinks($); 
     fun1();
     //pageToVisit=arr[c];
     //console.log("Visiting page " + pageToVisit);
     }
     
   //}
   });

function fun1()
{
  for (i=0;i<10;i++)
  {
    pageToVisit=arr[i];
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + 
encodeURIComponent('select * from html where url="' + pageToVisit + '"') + '&format=xml&callback=?';
   $.getJSON(yql, function(body) 
   {
   /*if(error) 
   {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);*/
   //if(response.statusCode === 200) 
   //{
     // Parse the document body
     if (!body.results.length == 0)
     {
        console.log("got into function body");

     //for (j=0;j<10000;j++)
    //for (k=0;k<10000;k++);
     body=body.results[0];
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
     console.log("Size of arr is : "+arr.length);
     //p+="Size of arr is : "+arr.length+"<br>";
     //console.log($('friends').text());
     collectInternalLinks($);

     //pageToVisit=arr[c];
     //console.log("Visiting page " + pageToVisit);

     }
     else
     {
        flagUndefined+=1;
     }
     
   //}
   });
  }



}



     function collectInternalLinks($) {
  var allRelativeLinks = [];
  //var arr=[];
  var allAbsoluteLinks = [];
  

  var relativeLinks = $("a[href^='/']");
  relativeLinks.each(function() {
      allRelativeLinks.push($(this).attr('href'));

  });

  var temp=$("a[href^='/']").text();
  var absoluteLinks = $("a[href^='http']");
  var titlesText=$("a[href^='http']");
  titlesText.each(function(){titles.push($(this).text().trim());});
  absoluteLinks.each(function() {
      arr.push($(this).attr('href'));
   allAbsoluteLinks.push($(this).attr('href'));
  });
  console.log("length of titles is " + titles.length);
  for (var i=0;i<titles.length;i++)
  {
    //console.log(titles[i]);
    //console.log(arr[i]);
    ;
  }

  
  var titleAnchorTags=[];
  if (flag==0)
    ans.push({"id": 0, "label": pageToVisit1 ,color: {background:'black', border:'purple'}, font: {size:12, color:'lime'}});
  /*for (var i=0;i<arr.length;i++)
  {
    titleAnchorTags.push("<a href=\""+titles[i]+"\">k</a>");

  }*/
  for(var j=pos; j< (pos + allAbsoluteLinks.length)-1; j++)
  {
    ans.push({"id": j+1, "label": titles[j+1] , color: {background:'black', border:'purple'} });
    edges.push({"from": flag, "to": j+1});

  }
  pos=j;
  // var nodes = new vis.DataSet(ans);
  // var edgesToSend = new vis.DataSet(edges);
  if (flag==(molecules- flagUndefined ))
  displayGraph(ans, edges,arr);
  flag+=1;
  //last=allAbsoluteLinks.length;
  console.log("Page title:  " + $('title').text());
  console.log("Found " + allRelativeLinks.length + " relative links");
  console.log("Found " + allAbsoluteLinks.length + " absolute links");
  //console.log("relativeLinks are ");
  //p+="Found " + allRelativeLinks.length + " relative links<br>" 
  //p+="Found " + allAbsoluteLinks.length + " absolute links<br>"
  console.log("\n\n\n");
  //p+="<br><br><br>";
  //document.getElementById("id2").innerHTML=p;
  //DELAY
  //for (j=0;j<1000;j++)
    //for (k=0;k<1000;k++);
   //var data = $("data-table-body");
   //var data=$("a[href^='quote/']").text();
   //var dataT=$("a[href^='quote/']").filter(function(index){console.log(index);});
   //var data=$('table').filter(function(index){
  //return $(this).html() == "<tr><td>something</td></tr>";
    
   //data.each(function() {
   //arr.push($(this));});
    //console.log(arr);
    //var data1 = $("a[href^='quote/']");
    //data1.each(function() {
      //arr.push($(this));});
    //console.log(data);

    if (arr.length>=200 && flag1==0)
    {
      for (i=0;i<200;i++)
      {
        p+="<a href=\""+arr[i]+"\">"+arr[i]+"</a>";
        p+="</br>";
      }
      document.getElementById("id1").innerHTML=p;
      flag1+=1;

    }
}










