$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("ul").append("<li>" + name + "</li>");
    $(".contacts").on("click", "li", function() {
      $(".name").text(name);
      $(".phone").text(phone);
      $(".email").text(email);
      $(".well").show();
    });
  });
});