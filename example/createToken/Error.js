interface Error {
  type: string; // `NO_PROVIDER`|`PROTOCOL_ERROR``|`MALFORMED_INPUT`|`CANCELED`
  description: string;
  data: string;
}
