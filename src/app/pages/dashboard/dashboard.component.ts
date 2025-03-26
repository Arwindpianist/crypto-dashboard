import { Component, OnInit } from '@angular/core';
import { CryptoChartComponent } from '../../components/crypto-chart/crypto-chart.component';
import { CryptoTableComponent } from '../../components/crypto-table/crypto-table.component'; // Import CryptoTableComponent
import { CryptoService } from '../../services/crypto.service'; // Import CryptoService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CryptoChartComponent, CryptoTableComponent], // Include CryptoTableComponent here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cryptos: any[] = []; // Array to hold the fetched crypto data

  constructor(private cryptoService: CryptoService) {} // Inject CryptoService

  ngOnInit() {
    this.fetchCryptoData(); // Call the method to fetch data on initialization
    console.log('DashboardComponent initialized');
  }

  fetchCryptoData() {
    this.cryptoService.getCryptoData().subscribe({
      next: (data) => {
        this.cryptos = data;
      },
      error: (error) => {
        console.error('Error fetching crypto data:', error);
      }
    });
  }
}