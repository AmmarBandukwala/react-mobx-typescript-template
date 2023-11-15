import { BaseCollectionStore } from "./BaseStore";

export interface ICryptoCoin {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export class CryptoCoinStore extends BaseCollectionStore<ICryptoCoin> {
  constructor() {
    super();
  }

  async getItems(...args: string[]): Promise<void> {
    try {
      const response = await fetch(this.Configuration.api_bitcoin_url);
      if (response.ok) {
        const payload: any = await response.json();
        this.setItems(payload["data"]);
      } else {
        console.warn("No data retrieved from API.");
      }
    } catch (error) {
      console.error(`API Invoke Error: ${error}`);
    }
  }
}

export default new CryptoCoinStore();
