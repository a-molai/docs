$("#login-form input:text:first").click(function() {
  if ($("#login-form input:text:first").val() == "پست الکترونیک")
    $("#login-form input:text:first").val('');
})

function username() {
  if ($("#login-form input:text:first").val() == "پست الکترونیک")
    $("#login-form input:text:first").val('');
  $("#login-form input:text:first").css({
    "font-family": "SegoeUI-Regular",
    "font-size": "11pt",
    "direction": "ltr",
    "color": "#000"
  });
}

function password() {
    if ($("#login-form input:text:nth-child(2)").val() == "رمز عبور") 
      $("#login-form input:text:nth-child(2)").val('');
    $("#login-form input:text:nth-child(2)").attr('type', 'password');
    $("#login-form input:nth-child(2)").css({
      "border": "none",
      "font-family": "SegoeUI-Regular",
      "font-size": "11pt",
      "direction": "ltr",
      "color": "#000"
    });
  }