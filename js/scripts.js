//FRONT END LOGIC
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number-input").val());
    var output = beepBoop(input);
    $("#output").text(output);
  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
  });
});

//BACK END LOGIC
function beepBoop(input) {
  var output;

  return output;
}
