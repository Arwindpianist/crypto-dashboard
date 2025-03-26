import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Crypto } from '../../models/crypto.model'; // Import the Crypto interface

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class CryptoChartComponent implements OnChanges {
  @Input() cryptos: Crypto[] = []; // Ensure this is typed as Crypto[]
  chartData: any[] = [];

  ngOnChanges() {
    if (this.cryptos && this.cryptos.length) {
      this.chartData = this.cryptos.map(coin => ({
        name: coin.name,
        value: coin.current_price, // You can change this to another metric if needed
        marketCap: coin.market_cap, // Example of adding market cap
        volume: coin.total_volume // Example of adding volume
      }));
    } else {
      this.chartData = [];
    }
  }
}