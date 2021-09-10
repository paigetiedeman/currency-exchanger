import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';

function getElements(response, inputCurrency) {
  if (response.result === 'success') {
    let exchange = response.conversion_rates * inputCurrency;
    $('#input').text(inputCurrency);
    $('#converted').text(exchange);
  } else {
    $('#error').text('There was an error: ${response}');
  }
}

async function makeApiCall(currency, inputCurrency) {
  const response = await currencyExchange.getExchange(currency);
  getElements(response, inputCurrency);
}

$(document).ready(function () {
  $('#currency-exchanger').submit(function (event) {
    event.preventDefault();
    let inputCurrency = $('#usCurrency').val();
    let currency = $('#inputConversion').val();
    makeApiCall(currency, inputCurrency);
  });
});
