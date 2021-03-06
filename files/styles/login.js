$(function() {

  $("li:first input").focusin(function() {
    if ($(this).val() == "پست الکترونیک") {
      $(this).val("");
      $(this).css({
        "font-family": "segoeui-regular",
        "font-size": "16px",
        "margin-top": "7px",
        "color": "#222"
      });
    };
  });

  $("li:first input").focusout(function() {
    if ($(this).val() == "") {
      $(this).val("پست الکترونیک");
      $(this).css({
        "font-family": "iyekan-regular",
        "font-size": "15px",
        "margin-top": "8px",
        "color": "#888"
      });
    };
  });

  $("li:nth-child(2) input").focusin(function() {
    if ($(this).val() == "رمز عبور") {
      $(this).val("");
      $(this).attr({
        "type": "password",
        "style": "width: 90%; margin: 7px 5% 0px 5%; background-color: transparent; font-family: 'segoeui-regular'; font-size: 15px; text-align: center; border: none; color: #222;"
      });
    };
  });

  $("li:nth-child(2) input").focusout(function() {
    if ($(this).val() == "") {
      $(this).val("رمز عبور");
      $(this).attr({
        "type": "text",
        "style": "width: 90%; margin: 6px 5% 0px 5%; background-color: transparent; font-family: 'iyekan-regular'; font-size: 15px; text-align: center; border: none; color: #888;"
      });
    };
  });

});