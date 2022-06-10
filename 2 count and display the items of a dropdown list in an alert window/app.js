function getOptions(){
var num=document.getElementById("mySelect");
var text = "Total number of items: ";

list=document.getElementById("mySelect").length;  
text = text+list;
for (var i=0;i<num.length;i++)
  {
    text = text + "\n" + num.options[i].text;
  }
alert(text);
}