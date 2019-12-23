// Import stylesheets
import './style.css';
import data from './paro.json';

//alert(JSON.stringify(data));
//jparo = JSON.parse(data);
//var hombre = JSON.stringify(data.Hombre.E16);



function Select(uEst, uEdad, uSex){
  var myData = [];

  if (uSex == "H") {
    myData = data.Hombre;
  } else {
    myData = data.Mujer;
  }
  //alert(uEdad);
  //alert(JSON.stringify(myData.E16));  // define colors as needed

  if (uEdad < 18) {
    //alert(uEdad);  // define colors as needed
    myData = myData.E16;
} else if (uEdad <= 23) {
    myData = myData.E20;
  } else if (uEdad <= 28) {
    myData = myData.E25;
  }  else if (uEdad <= 37) {
    myData = myData.E30;
  } else if (uEdad <= 50) {
    myData = myData.E45;
  } else {
    myData = myData.E55;
  }

  //myData = myData.filter(function (el) {
  //  return el.estudios == uEst;
  //});

  return myData;
}

function Pinta(myData){
  var visualization = d3plus.viz()
      .container("#viz")  // container DIV to hold the visualization
      .data(myData)  // data to use with the visualization
      .type("line")       // visualization type
      .id("estudios")         // key for which our data is unique on
      .text("estudios")       // key to use for display text
      .y("value")         // key to use for y-axis
      .x("name")          // key to use for x-axis
      .draw()             // finally, draw the visualization!

  // Write Javascript code!
  //const appDiv = document.getElementById('app');
  //appDiv.innerHTML = `<h1>JS Starter</h1>`;
}

$("#button").click(function(){
  $('#viz').empty();
  var uEdad1 = $("#txtEdad1").val();
  var uEdad2 = $("#txtEdad2").val();
  var uSex1 = $("#cmbSex1").val();
  var uSex2 = $("#cmbSex2").val();
  var uEst1 = $("#cmbEstudio1").val();
  var uEst2 = $("#cmbEstudio2").val();
  
  var myData1 = Select(uEst1, uEdad1, uSex1);
  myData1.map (function(d) { 
    d.estudios = uSex1.concat("_" , uEdad1, "_" , uEst1);
  }); 

  var myData2 = Select(uEst2, uEdad2, uSex2);
  myData2.map (function(d) { 
    d.estudios = uSex2.concat("_" , uEdad2, "_" , uEst2);
  }); 

  //alert(JSON.stringify(myData1));
  //alert(JSON.stringify(myData2));

  var myData = myData1.concat(myData2);

  //alert(JSON.stringify(myData));
  Pinta(myData);
});