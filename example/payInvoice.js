const { payInvoice, constants } = bitcoincomLink;

function handleButtonClick() {
  
  fetch("https://pay.bitcoin.com/create_invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      address:"bitcoin:1ApdxdX9moi74qRf5z3ZNhvpHv7Bt5VC3a",
      amount: 0.00001,
      memo:"This is a simple invoice test"
    })
  })
  .then(res => res.json())
  .then(({paymentUrl}) => {
    const params = {
      url: paymentUrl,
    };
    return payInvoice(params);
  })
  .then(result => {
    resultEle.innerHTML = JSON.stringify(result);
  })
  .catch(err => {
    errorResultEle.innerHTML = JSON.stringify(errorResult);
  });
}

const resultEle = document.getElementById('result');
const errorResultEle = document.getElementById('error');
