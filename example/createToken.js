const { createToken, constants } = bitcoincomLink;

function handleButtonClick() {
  const params = {
    name: "World Hunger Token",
    symbol: "WHT",
    decimals: 8,
    initialSupply: "1000000000",
    tokenReceiverAddress: "simpleledger:qrw3pqgyjffxsv5qdj9n6zdpe70zqsegxcjyff6q8m"
  };

  createToken(params)
    .then(result => {
      resultEle.innerHTML = JSON.stringify(result);
    })
    .catch(err => {
      errorResultEle.innerHTML = JSON.stringify(err);
    });
}

const resultEle = document.getElementById("result");
const errorResultEle = document.getElementById("error");
