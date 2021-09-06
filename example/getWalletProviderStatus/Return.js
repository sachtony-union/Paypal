interface GetWalletProviderStatusOutput {
  badger: WalletProviderStatus;
  android: WalletProviderStatus;
  ios: WalletProviderStatus;
}

enum WalletProviderStatus {
  NOT_AVAILABLE,
  AVAILABLE,
  LOGGED_IN,
}
