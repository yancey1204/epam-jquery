// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo~oooo~! ");
});

$("#before button").click(function() {
	$("#before p").before("Yo~oooo~! ");
});

$("#css1 button").click(function() {
  $("#css1 p").css("fontSize","24px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"fontSize":"24px","color":"blue"});
});

$("#attr1 button").click(function() {
  var val = $("#attr1 p a").attr("href");
  console.log(val);
});

$("#attr2 button").click(function() {
  $("#attr2 p a").attr("href","http://www.google.com");
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  if ($("#class2 p").hasClass("lead")) {
    alert("yes");
  }
});

$("#form1 button").click(function() {
  var val1 = $("#exampleInputEmail1").val();
  console.log(val1);
});

$("#form2 button").click(function() {
  $("#exampleInputName2").val("yancey1204@gmail.com");
});

// handle the mouseover event here
$(".img-responsive").mouseover(function(){
  $(this).css("transform","scale(1.5,1.5)");
});
// handle the form events here

$("#formEvents form").submit(function(event) {
  event.preventDefault();
  var email = $("#inputEmail3").val();
  var password = $("#inputPassword3").val();
  var ifRememberMe = $(".checkbox input[type=checkbox]").prop("checked");
  console.log("email : ",email);
  console.log("password : ",password);
  console.log("ifRememberMe : ",ifRememberMe);
});