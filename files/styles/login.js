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
        "type": "password",
        "width": "60%",
  "padding": "10px 10%",
  "margin": "0px 10% 10px 10%",
  "font-family": "iyekan-regular",
  "font-size": "15px",
  "direction": "ltr",
  "text-align": "center",
  "background-color": "#ddd",
  "border": "none",
  "color": "#999",
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