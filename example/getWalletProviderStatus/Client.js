import bitcoincomLink from 'bitcoincom-link';

const providerStatuses = bitcoincomLink.getWalletProviderStatus();
console.log('Provider statuses: ' + JSON.stringify(providerStatuses));
