//var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var allAbsoluteLinks=[];
var last=0;
var arr=[];

//var pageToVisit = "https://www.bloomberg.com/markets/currencies/cross-rates";
//https://www.bloomberg.com/markets/currencies/cross-rates

window.fun2=function()
{

  var pageToVisit=document.getElementById("id1").value;
  var p=document.getElementById("id2").innerHTML;
  p="";

var c=0,a=0;
console.log("Visiting page " + pageToVisit);
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
     for (j=0;j<10000;j++)
    for (k=0;k<10000;k++);
     body=body.results[0];
     //console.log(body);
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
     //console.log($('friends').text());
     collectInternalLinks($);
     fun1();
     //pageToVisit=arr[c];
     //console.log("Visiting page " + pageToVisit);
     
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

     for (j=0;j<10000;j++)
    for (k=0;k<10000;k++);
     body=body.results[0];
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
     console.log("Size of arr is : "+arr.length);
     p+="Size of arr is : "+arr.length+"<br>";
     //console.log($('friends').text());
     collectInternalLinks($);

     //pageToVisit=arr[c];
     //console.log("Visiting page " + pageToVisit);
     
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
  absoluteLinks.each(function() {
      arr.push($(this).attr('href'));
   allAbsoluteLinks.push($(this).attr('href'));
  });
  //last=allAbsoluteLinks.length;
  console.log("Found " + allRelativeLinks.length + " relative links");
  console.log("Found " + allAbsoluteLinks.length + " absolute links");
  //console.log("relativeLinks are ");
  p+="Found " + allRelativeLinks.length + " relative links<br>" 
  p+="Found " + allAbsoluteLinks.length + " absolute links<br>"
  console.log("\n\n\n");
  p+="<br><br><br>";
  document.getElementById("id2").innerHTML=p;
  //DELAY
  for (j=0;j<1000;j++)
    for (k=0;k<1000;k++);
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

    



}

   

}





