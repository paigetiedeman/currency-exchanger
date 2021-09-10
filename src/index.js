import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';

$(document).ready(function() {
  
  
  
  $("#currency-exchanger").submit(function (event) {
    event.preventDefault();
    let inputCurrency = $("#usCurrency").val();
    $("#input").text('${inputCurrency}');
    console.log(inputCurrency);
  });
});