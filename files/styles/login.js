$(function() {

  $("input:text:first").focusin(function() {
    if ($("input:text:first").val() == "نام کاربری") {
      $("input:text:first").val("");
      $("input:text:first").css({
        "font-family": "segoeui-regular",
        "font-size": "16px",
        "margin-top": "6px",
        "color": "#222"
      });
    };
  });

  $("input:text:first").focusout(function() {
    if ($("input:text:first").val() == "") {
      $("input:text:first").val("نام کاربری");
      $("input:text:first").css({
        "font-family": "iyekan-regular",
        "font-size": "15px",
        "margin-top": "8px",
        "color": "#888"
      });
    };
  });

  $("input:text:nth-child(2)").focusin(function() {
    if ($("input:text:nth-child(2)").val() == "p") {
      $("input:text:nth-child(2)").val("");
      $("input:text:nth-child(2)").css({
        "font-family": "segoeui-regular",
        "font-size": "16px",
        "margin-top": "6px",
        "color": "#222"
      });
    };
  });

  $("input:text:nth-child(2)").focusout(function() {
    if ($("input:text:nth-child(2)").val() == "") {
      $("input:text:nth-child(2)").val("p");
      $("input:text:nth-child(2)").css({
        "font-family": "iyekan-regular",
        "font-size": "15px",
        "margin-top": "8px",
        "color": "#888"
      });
    };
  });

});