import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';

function getElements(response, inputCurrency) {
  if (response.result === "success") {
    let exchange = (response.conversion_rates) * inputCurrency;
    $('#input').text(inputCurrency);
    $('#converted').text(exchange);
  } else {
    $('#error').text("There was an error: ${response}")
  }
}

$(document).ready(function () {
  let promise = currencyExchange.getExchange();
  promise.then(function (response) {
    $('#currency-exchanger').submit(function (event) {
      event.preventDefault();
      // const body = JSON.parse(response);
      const conversion = response.conversion_rates;
      let inputCurrency = $('#usCurrency').val();
      let selectedRate = $('#inputConversion').val();
      let rate = conversion[selectedRate];
      const converter = exchanger.inputCurrency * exchanger.rate;
      
    });
  });
});
