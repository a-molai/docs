$(function() {

  $("#login-form input:text:first").focusin(function() {
    if ($("#login-form input:text:first").val() == "نام کاربری") {
      $("#login-form input:text:first").val("");
      $("#login-form input:text:first").css({
        "font-family": "SegoeUI-Regular",
        "padding-bottom": "11px",
        "color": "#000"
      });
    }
  });

  $("#login-form input:text:first").focusout(function() {
    if ($("#login-form input:text:first").val() == "") {
      $("#login-form input:text:first").val("نام کاربری");
      $("#login-form input:text:first").css({
        "font-family": "iyekan-regular",
        "padding-bottom": "10px",
        "color": "#999"
      });
    }
  });


  $("#login-form input:text:nth-child(2)").focusin(function() {
    if ($("#login-form input:text:nth-child(2)").val() == "رمز عبور") {
      $("#login-form input:text:nth-child(2)").val("");
      $("#login-form input:text:nth-child(2)").attr({
        "type": "password"
      });
      $("#login-form input:text:nth-child(2)").css({
        "padding-bottom": "11px",
        "color": "#000"
      });
    }
  });

  $("#login-form input:text:nth-child(2)").focusout(function() {
    if ($("#login-form input:text:nth-child(2)").val() == "") {
      $("#login-form input:text:nth-child(2)").val("رمز عبور");
      $("#login-form input:text:nth-child(2)").css({
        "font-family": "iyekan-regular",
        "padding-bottom": "10px",
        "color": "#999"
      });
    }
  });

});