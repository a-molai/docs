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


  $("input:nth-child(2)").focusin(function() {
    if ($("input:nth-child(2)").val() == "p") {
      $("input:nth-child(2)").val("");
      $("input:nth-child(2)").attr({
        "type": "password",
        "style": "width: 60%; padding: 11px 10% 9px 10%; margin: 0px 10% 10px 10%; font-family: 'segoeui-regular'; font-size: 15px; text-align: center; background-color: #ddd; border: none; color: #000"
      });
    };
  });

  $("input:nth-child(2)").focusout(function() {
    if ($("input:nth-child(2)").val() == "") {
      $("input:nth-child(2)").attr({
        "type": "text",
        "style": "width: 60%; padding: 11px 10% 9px 10%; margin: 0px 10% 10px 10%; font-family: 'iyekan-regular'; font-size: 15px; text-align: center; background-color: #ddd; border: none; color: #000"
      });
      $("input:nth-child(2)").val("رمز عبور");
    };
  });

});