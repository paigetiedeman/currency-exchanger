import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';


function getElements(response, inputCurrency, selectedCurrency) {
  if (response.result === 'success') {
    const exchange = response.conversion_rate * inputCurrency;
    $('#input').text(inputCurrency);
    $('#converted').text(exchange);
    $("#selected").text(selectedCurrency);
  } else {
    $('#error').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(selectedCurrency, inputCurrency) {
  const response = await currencyExchange.getExchange(selectedCurrency);
  getElements(response, inputCurrency, selectedCurrency);
  $(".showConversion").show();
}

$(document).ready(function () {
  $('#currency-exchanger').submit(function (event) {
    event.preventDefault();
    let inputCurrency = $('#usCurrency').val();
    let selectedCurrency = $('#inputConversion').val();
    makeApiCall(selectedCurrency, inputCurrency);
  });
});
