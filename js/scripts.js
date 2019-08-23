//FRONT END LOGIC
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number-input").val());
    var output;
    if (input < 1 || !input) {
      output = "Please enter a number greater than 0.";
    } else {
      output = beepBoop(input).join(", ");
      $("#bottom").show();
    }
    $("#output").text(output);
  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
    $("#bottom").hide();
  });
  $("#reverse").click(function() {
    var input = parseInt($("#number-input").val());
    var output;
    if (input < 1 || !input) {
      output = "Please enter a number greater than 0.";
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
      outputArray[i] = "I'm sorry, Dave, I'm afraid I can't do that";
    } else if (outputArray[i].includes(2)) {
      outputArray[i] = "Boop!";
    } else if (outputArray[i].includes(1)) {
      outputArray[i] = "Beep!";
    }
  }
  return outputArray;
}
