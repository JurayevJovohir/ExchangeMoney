elForm = document.querySelector(".form-control");
elInput = document.querySelector(".input-money");
elSelect = document.querySelector(".select");
elTitle = document.querySelector(".exchange-title");
elResult = document.querySelector(".exchange-result");

var RUB = 184.46;
var USD = 11252;
var EUR = 11686;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elInputValue = +elInput.value;
  var elSelectValue = +elSelect.value;
  var MoneyRub = elInputValue / RUB;
  var MoneyUsd = elInputValue / USD;
  var MoneyEur = elInputValue / EUR;


    if (elSelect.value == 1) {
      elTitle.textContent = "1 ₽   = 184.46 so'm";
      elResult.textContent = MoneyRub.toFixed(2) + " ₽";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Summa va Valyuta kiriting";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "VALYUTANI TANLANG";
    }

    if (elSelect.value == 2) {
      elTitle.textContent = "1 $ = 11252 so'm";
      elResult.textContent = MoneyUsd.toFixed(2) + " $";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Summa va Valyuta kiriting";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "VALYUTANI TANLANG";
    }

    if (elSelect.value == 3) {
      elTitle.textContent = "1 € = 11686 so'm";
      elResult.textContent = MoneyEur.toFixed(2) + " €";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Summa va Valyuta kiriting";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "VALYUTANI TANLANG";
    }
});
