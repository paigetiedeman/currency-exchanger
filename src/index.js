import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';

function convertUS(inputCurrency, rate) {
  return (inputCurrency * rate).toFixed(2);
}

$(document).ready(function () {
  let promise = currencyExchange.getExchange(dollar);
  promise.then(function (response) {
    $('#currency-exchanger').submit(function (event) {
      event.preventDefault();
      // const body = JSON.parse(response);
      const conversion = response.conversion_rates;
      let inputCurrency = $('#usCurrency').val();
      let selectedRate = $('#inputConversion').val();
      let rate = conversion[selectedRate];
      console.log(selectedRate);
      $('#input').text(inputCurrency);
      $('#converted').text(convertUS(inputCurrency, rate));
    });
  })(function (error) {
    $('#error').text('${error}');
  });
});
