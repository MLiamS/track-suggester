
$(function(){
  $("form#formInfo").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    $(".name").text(name);
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());
    var q7 = parseInt($("#q7").val());
    respond(q1, q2, q3, q4, q5, q6, q7);
    var answers= [php,jav,ruby,c]

    console.log(answers);



  });

var php = 0;
var jav = 0;
var ruby = 0;
var c = 0;

var answers= [php,jav,ruby,c]

var q1 = parseInt($("#q1").val())
var q2 = parseInt($("#q2").val())
var q3 = parseInt($("#q3").val())
var q4 = parseInt($("#q4").val())
var q5 = parseInt($("#q5").val())
var q6 = parseInt($("#q6").val())
var q7 = parseInt($("#q7").val())
console.log(q1, q2, q3, q4, q5, q6, q7)


var respond = function(q1, q2, q3, q4, q5, q6, q7)  {

  if (q1 === 1){
    c += 1}
  if (q1 === 2){
    jav += 1}
  if (q1 === 3){
    ruby += 1}{
        }
        if (q2 === 1){
          c += 1}
        if (q2 === 2){
          jav += 1}
        if (q2 === 3){
          php += 1}
        if(q2 === 4){
          ruby += 1}
          if (q3 === 1){
            c += 1}
          if (q3 === 2){
            jav += 1}
          if (q3 === 3){
            php += 1}
          if (q3 === 4){
            ruby += 1}
              if (q4 === 1){
                jav += 1}
                if (q5 === 1){
                php += 1}
                  if (q6 === 1){
                    ruby += 1}
                    if (q7 === 1){
                      c += 1}
                    }


});
