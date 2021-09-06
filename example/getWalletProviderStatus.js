const { getWalletProviderStatus } = bitcoincomLink;

function handleButtonClick() {
  const providerStatuses = getWalletProviderStatus()
  resultEle.innerHTML = JSON.stringify(providerStatuses);
}

const resultEle = document.getElementById("result");
