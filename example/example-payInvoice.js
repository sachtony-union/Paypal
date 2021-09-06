const { payInvoice, constants } = bitcoincomLink;

function handleButtonClick() {
  
  fetch("https://pay.bitcoin.com/create_invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      address:"bitcoincash:qqx8nz0fmp6strzrw84tkj7p68ujss9h4gfqdjgj7g",
      amount: 100000,
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
