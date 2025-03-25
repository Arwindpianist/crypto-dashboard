import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Import NgxChartsModule
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Import your DashboardComponent
import { CryptoChartComponent } from './components/crypto-chart/crypto-chart.component'; // Import your CryptoChartComponent

@NgModule({
  declarations: [
     // Declare your other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    DashboardComponent,
    CryptoChartComponent// AppComponent is not included here since it's standalone
  ],
  providers: []
})
export class AppModule { }