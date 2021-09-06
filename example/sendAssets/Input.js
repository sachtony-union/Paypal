interface SendAssetsInput {
  to: string; // Address of the receiver of the assets to be sent
  protocol: string; // BCH/SLP/BTC or any future protocol
  assetId?: string; // Optional in the case of BCH or BTC. Required in the case of SLP, and will be token id
  value: string; // The amount of coins or assets to be sent, in user readable decimal format (eg. "0.000123")
}
