$(document).ready(function() {
  // const url =
  //   "https://raw.githubusercontent.com/kvoncode/materialize-autocomplete/master/countries.json";
  // $.getJSON(url).done(function(data) {
  //   console.log("TCL: data", data);
  // }).always( () => {console.log("always")})
  // .fail( () => { console.log("fail")});

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
      
      const countries = JSON.parse(this.responseText);
      // console.log("TCL: xhttp.onreadystatechange -> countries", countries)

      const compatibleData = {};
      
      countries.forEach(element => {
        compatibleData[ element["name"] ] = null
      });
      
      console.log("TCL: xhttp.onreadystatechange -> compatibleData", compatibleData)
      // bind data
      $("input.autocomplete").autocomplete({
        data: compatibleData
      });

    }
  };

  xhttp.open("GET", "countries.json", true);

  xhttp.send();
});
