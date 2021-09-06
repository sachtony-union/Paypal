import bitcoincomLink from 'bitcoincom-link';

bitcoincomLink.createToken({
  name: 'World Hunger Token',
  symbol: 'WHT',
  decimals: 8,
  initialSupply: '1000000000',
  tokenReceiverAddress: 'simpleledger:qrw3pqgyjffxsv5qdj9n6zdpe70zqsegxcjyff6q8m',
})
.then((data: CreateTokenOutput) => {
  const {
    tokenId,
  } = data;

  console.log('Token id: ' + tokenId);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
    case MALFORMED_INPUT:
      console.log('The input provided is not valid.');
      break;
    case CANCELED:
      console.log('The user has canceled this transaction request.');
      break;
  }
});

