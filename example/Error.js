interface Error {
  type: string; // `NO_PROVIDER`|`CONNECTION_DENIED`
  description: string;
  data: string;
}
