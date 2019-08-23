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
  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
  });
});
//BACK END LOGIC
function beepBoop(input) {
  var outputArray =[];
  for (var i = 0; i <= input; i++) {
    var element = i;
    outputArray.push(element);
  }
  console.log(outputArray);


  for (var i = 0; i < outputArray.length; i++) {

    if (outputArray[i].toString().includes(3)) {
      outputArray[i] = "I'm sorry, Dave, I'm afraid I can't do that";
    } else if (outputArray[i].toString().includes(2)) {
      outputArray[i] = "Boop!";
    } else if (outputArray[i].toString().includes(1)) {
      outputArray[i] = "Beep!";
    }
  }



  console.log(outputArray);
  var output = outputArray.join(", ");
  return output;
}
