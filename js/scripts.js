//FRONT END LOGIC
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number-input").val());
    if (input < 1) {
      output = "Please enter a number greater than 0.";
    } else {
      var output = beepBoop(input).join(", ");
    }
    $("#output").text(output);
  });
  $("#reverse").click(function() {
    var input = parseInt($("#number-input").val());
    if (input < 1) {
      var output = "Please enter a number greater than 0.";
    } else {
      var originalArray = beepBoop(input);
      output = originalArray.reverse().join(", ");
    }
    $("#output").text(output);
  });
});
//BACK END LOGIC
function beepBoop(input) {
  var outputArray =[];
  for (var i = 0; i <= input; i++) {
    outputArray.push(i.toString());
  }
  for (var i = 0; i < outputArray.length; i++) {
    if (outputArray[i].includes(3)) {
      outputArray[i] = "I'm sorry, Dave. I'm afraid I can't do that";
    } else if (outputArray[i].includes(2)) {
      outputArray[i] = "Boop!";
    } else if (outputArray[i].includes(1)) {
      outputArray[i] = "Beep!";
    }
  }
  return outputArray;
}
