const { sendAssets, constants } = bitcoincomLink;

function handleButtonClick() {
  const params = {
    to: 'bitcoin:1ApdxdX9moi74qRf5z3ZNhvpHv7Bt5VC3a',
    protocol: 'BTC',
    value: '0.123123'
  };

  sendAssets(params)
  .then(result => {
    resultEle.innerHTML = JSON.stringify(result);
  })
  .catch(errorResult => {
    errorResultEle.innerHTML = JSON.stringify(errorResult);
  });
}

const resultEle = document.getElementById('result');
const errorResultEle = document.getElementById('error');
