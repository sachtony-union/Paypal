import bitcoincomLink from 'bitcoincom-link';

bitcoincomLink.getAddress({
  protocol: 'BCH',
})
.then((data: GetAccountOutput) => {
  const {
    address,
    label,
  } = data;

  console.log('User address: ' + address);
  console.log('User address label (Optional): ' + label);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case CANCELED:
      console.log('The user has canceled this request.');
      break;
    case PROTOCOL_ERROR:
      console.log('The provided protocol is not supported by this wallet.');
      break;
  }
});
