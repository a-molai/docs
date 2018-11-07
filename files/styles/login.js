$(function() {

  $("input:text:first").focusin(function() {
    if ($(this).val() == "نام کاربری") {
      $(this).val("");
      $(this).css({
        "font-family": "segoeui-regular",
        "font-size": "16px",
        "margin-top": "6px",
        "color": "#222"
      });
    };
  });

  $("input:text:first").focusout(function() {
    if ($(this).val() == "") {
      $(this).val("نام کاربری");
      $(this).css({
        "font-family": "iyekan-regular",
        "font-size": "15px",
        "margin-top": "8px",
        "color": "#888"
      });
    };
  });

  $("input[type=text]:nth-child").focusin(function() {
    $(this)

});