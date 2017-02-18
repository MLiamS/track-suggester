
$(function(){
  $("#formInfo").submit(function(){
    event.preventDefault();
    $(".response").fadeOut("slow");
    var name = $("#name").val();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());
    respond(q1, q2, q3, q4, q5, q6);
    var cohort = path(php,jav,ruby,c);
    $(".name").text(name);
    $(".path").text(cohort);
    $(".response").fadeIn("slow");
    console.log(q1, q2, q3, q4, q5, q6);
    console.log(php,jav,ruby,c);
    console.log(path(php,jav,ruby,c));
    clear();
    console.log(php,jav,ruby,c);
});

var php = 0;
var jav = 0;
var ruby = 0;
var c = 0;


var q1 = parseInt($("#q1").val())
var q2 = parseInt($("#q2").val())
var q3 = parseInt($("#q3").val())
var q4 = parseInt($("#q4").val())
var q5 = parseInt($("#q5").val())
var q6 = parseInt($("#q6").val())


function clear(){
php = 0;
jav = 0;
ruby = 0;
c = 0;
}

var path = function(php,jav,ruby,c){
  if(php > jav && php > ruby && php > c){
  return "PHP";
  }
  if (jav > php && jav > ruby && jav > c){
  return "Java";
  }
  if (ruby > jav && ruby > php && ruby > c){
  return "Ruby";
  }
  if (c > php && c > jav && c > ruby){
    return "C#";
  }
  if (php === jav && php > ruby && php > c){
    return "PHP or Java";
  }
  if (php === ruby && php > jav && php > c){
    return "PHP or Ruby";
  }
  if (php === c && php > ruby && php > jav){
    return "PHP or C#";
  }
  if (jav === ruby && jav > php && jav > c){
    return "Java or Ruby";
  }
  if (jav === c && jav > php && jav > ruby){
    return "Java or C#";
  }
  if (ruby === c && ruby > php && ruby > jav){
    return "Ruby or C#";
  }
  if ((ruby === c) && (c === jav) && (ruby != php)){
    return "Ruby, C#, or Java"; //not PHP
  }
  if ((ruby === php && php === jav) && ruby != c){
    return "Ruby, PHP, or Java"; //not C#
  }
  if ((php === c && c === jav) && c != ruby){
    return "PHP, C#, or Java"; //not Ruby
  }
  if ((php === c && c === ruby) && ruby != jav){ //not java
    return "PHP, C#, or Ruby";
  }
  if (php === c && c === jav && php === jav && c === ruby){
      return "PHP, C#, Java, or Ruby"; //all
  }
}

var respond = function(q1, q2, q3, q4, q5, q6)  {

  if (q1 === 1){
    c += 1}
  if (q1 === 2){
    jav += 1}
  if (q1 === 3){
    ruby += 1}
  if (q2 === 1){
    c += 1}
  if (q2 === 2){
    jav += 1}
  if (q2 === 3){
    php += 1}
  if(q2 === 4){
    ruby += 1}
  if (q3 === 1){
    jav += 1}
  if (q4 === 1){
    php += 1}
  if (q5 === 1){
    ruby += 1}
  if (q6 === 1){
    c += 1}
}


});
