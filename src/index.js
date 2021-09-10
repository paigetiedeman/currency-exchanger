import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchange from './currency-exchange.js';


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
      let exchanger = new currencyExchange(inputCurrency, rate);
      const converter = exchanger.inputCurrency * exchanger.rate;
      $('#input').text(inputCurrency);
      $('#converted').text(converter);
    });
  });
  // (function(error) {
  //   $('#error').text('${error}');
});
// });
