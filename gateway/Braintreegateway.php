$gateway = new Braintree\Gateway([
    'environment' => 'production',
    'merchantId' => 'use_your_merchant_id',
    'publicKey' => 'use_your_public_key',
    'privateKey' => 'use_your_private_key'
]);
