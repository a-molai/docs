$(function() {
  $("#login-form input:text:first").focusin(function() {
    if ($("#login-form input:text:first").val() == "نام کاربری")
      $("#login-form input:text:first").val("");
      $("#login-form input:text:first").css({
        "font-family": "SegoeUI-Regular",
        "font-size": "11pt",
        "direction": "ltr",
        "color": "#000"
      });
  });
  $("#login-form input:text:first").focusout(function() {
    if ($("#login-form input:text:first").val() == "")
      $("#login-form input:text:first").val("نام کاربری");
  });
  $("#login-form input:text:nth-child(2)").focusin(function() {
    if ($("#login-form input:text:nth-child(2)").val() == "رمز عبور")
      $("#login-form input:text:nth-child(2)").val("");
  });
  $("#login-form input:text:nth-child(2)").focusout(function() {
    if ($("#login-form input:text:nth-child(2)").val() == "")
      $("#login-form input:text:nth-child(2)").val("رمز عبور");
  });
});