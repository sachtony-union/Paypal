const { getAddress, constants } = bitcoincomLink;

function handleButtonClick() {
  const params = { protocol: "BTC" };

  getAddress(params)
  .then(result => {
    resultEle.innerHTML = JSON.stringify(result);
  })
  .catch(errorResult => {
    errorResultEle.innerHTML = JSON.stringify(errorResult);
  });
}

const resultEle = document.getElementById('result');
const errorResultEle = document.getElementById('error');
