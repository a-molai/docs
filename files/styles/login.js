$(function() {

  $("#login-form input:text:first").focusin(function() {
    if ($("#login-form input:text:first").val() == "نام کاربری") {
      $("#login-form input:text:first").val("");
      $("#login-form input:text:first").css({
        "font-family": "SegoeUI-Regular",
        "font-size": "15px",
        "color": "#000"
      });
    }
  });

  $("#login-form input:text:first").focusout(function() {
    if ($("#login-form input:text:first").val() == "") {
      $("#login-form input:text:first").val("نام کاربری");
      $("#login-form input:text:first").css({
        "font-family": "iyekan-regular",
        "font-size": "11px",
        "color": "#999"
      });
    }
  });

});