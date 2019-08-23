//FRONT END LOGIC
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number-input").val());
    var output;
    if (input < 1) {
      output = "Please enter a number greater than 0.";
    } else {
      output = beepBoop(input);
    }
    $("#output").text(output);
    $("#bottom").show();
  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
    $("#bottom").hide();
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
  var output = outputArray.join(", ");
  return output;
}
