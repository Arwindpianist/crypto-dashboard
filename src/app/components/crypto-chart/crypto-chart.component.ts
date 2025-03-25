import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Import NgxChartsModule

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss'],
  standalone: true, // Mark this component as standalone
  imports: [NgxChartsModule] // Import NgxChartsModule here
})
export class CryptoChartComponent implements OnChanges {
  @Input() cryptos: any[] = []; // Input property to receive data
  chartData: any[] = []; // Property to hold processed chart data

  ngOnChanges() {
    if (this.cryptos && this.cryptos.length) {
      this.chartData = this.cryptos.map(coin => ({
        name: coin.name, // Ensure coin.name is defined
        value: coin.current_price // Ensure coin.current_price is defined
      }));
    } else {
      this.chartData = []; // Reset chart data if no valid input
    }
  }
}