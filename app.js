$(document).ready(function() {
  $.getJSON("countries.json", function(data) {
    console.log("TCL: data", data);
  });

  $("input.autocomplete").autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250"
    }
  });
});
