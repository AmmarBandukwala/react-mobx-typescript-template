import { generateRandomString } from './utils/Extensions'

export class AppConfiguration {
  environment: string = process.env.NODE_ENV ?? "dev";
  client_id: string = "XXXXX";
  state: string = generateRandomString(32);
  app_name: string = "sample-app";
  api_signin_url: string = "https://apis.google.com";
  api_trace_url: string = "https://1.1.1.1/cdn-cgi/trace";
  api_bitcoin_url: string = "https://api.coinlore.net/api/tickers/";
}