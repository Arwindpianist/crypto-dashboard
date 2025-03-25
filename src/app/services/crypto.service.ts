import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures the service is available throughout the app
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets'; // CoinGecko API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch cryptocurrency data from CoinGecko
  getCryptoData(): Observable<any[]> {
    const params = {
      vs_currency: 'usd', // Currency to compare against
      order: 'market_cap_desc', // Order by market cap
      per_page: '10', // Number of results per page
      page: '1', // Page number
      sparkline: 'false' // Do not include sparkline data
    };

    return this.http.get<any[]>(this.apiUrl, { params }); // Make the HTTP GET request
  }
}