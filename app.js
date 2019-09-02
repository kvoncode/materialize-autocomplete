$(document).ready(function() {

  $.getJSON("countries.json", function (data) {
      console.log("asd");
    }
  );
      console.log("asd");


  $("input.autocomplete").autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250"
    }
  });

});
