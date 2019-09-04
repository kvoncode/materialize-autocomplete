$(document).ready(function() {
  // const url =
  //   "https://raw.githubusercontent.com/kvoncode/materialize-autocomplete/master/countries.json";
  // $.getJSON(url).done(function(data) {
  //   console.log("TCL: data", data);
  // }).always( () => {console.log("always")})
  // .fail( () => { console.log("fail")});

  // $("input.autocomplete").autocomplete({
  //   data: {
  //     Apple: null,
  //     Microsoft: null,
  //     Google: "https://placehold.it/250x250"
  //   }
  // });

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    console.log(
      "TCL: xhttp.onreadystatechange -> this.readyState",
      this.readyState
    );

    if(this.readyState == 4) {
      this.status;
      console.log("TCL: xhttp.onreadystatechange -> this.status", this.status)

      this.responseText;
      console.log("TCL: xhttp.onreadystatechange -> this.responseText", this.responseText)
    }
  };

  xhttp.open("GET", "countries.json", true);

  xhttp.send();
});
