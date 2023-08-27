$(document).ready(function () {
  var lowercaseKeys = "abcdefghijklmnopqrstuvwxyz1234567890`-=[]\\;',./";
  var uppercaseKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:\"<>?";

  var outputLower = $("#output-lower");
  var outputUpper = $("#output-upper");

  $(document).keydown(function (event) {
    var keyPressed = String.fromCharCode(event.keyCode);

    if (lowercaseKeys.indexOf(keyPressed) !== -1) {
      outputLower.append(keyPressed);
    } else if (uppercaseKeys.indexOf(keyPressed) !== -1) {
      outputUpper.append(keyPressed);
    }
  });

  $(document).keyup(function (event) {
    var keyPressed = String.fromCharCode(event.keyCode);

    if (lowercaseKeys.indexOf(keyPressed) !== -1) {
      outputLower.empty();
    } else if (uppercaseKeys.indexOf(keyPressed) !== -1) {
      outputUpper.empty();
    }
  });
});
