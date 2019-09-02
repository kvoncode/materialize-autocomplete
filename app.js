$(document).ready(function() {

  const url =
    "https://raw.githubusercontent.com/kvoncode/materialize-autocomplete/master/countries.json";
  $.getJSON(url).done(
    function (data) {
    console.log("TCL: data", data)
      
    }
  );

  $("input.autocomplete").autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250"
    }
  });
});
