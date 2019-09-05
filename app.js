$(document).ready(function() {
  function bindData(data) {
    $("input.autocomplete").autocomplete({
      data: data
    });
  }

  const url = "countries.json";

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (4 == this.readyState && 200 == this.status) {
      const parsedData = JSON.parse(this.responseText);
      // console.log("TCL: xhttp.onreadystatechange -> parsedData", parsedData)

      const compatibleData = {};

      parsedData.forEach(element => {
        compatibleData[element["name"]] = null;
      });

      // console.log(
      //   "TCL: xhttp.onreadystatechange -> compatibleData",
      //   compatibleData
      // );

      bindData(compatibleData);
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
});
