import bitcoincomLink from 'bitcoincom-link';

bitcoincomLink.sendAssets({
  to: 'bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzezc',
  protocol: 'BCH',
  value: '0.000123',
})
.then((data: SendAssetsOutput) => {
  const {
    txid,
  } = data;

  console.log('Completed transaction id: ' + txid);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
    case SEND_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
    case MALFORMED_INPUT:
      console.log('The input provided is not valid.');
      break;
    case CANCELED:
      console.log('The user has canceled this transaction request.');
      break;
  }
});

