import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { Crypto } from '../../models/crypto.model'; // Import the Crypto interface

@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnChanges {
  @Input() dataSource: Crypto[] = []; // Expect data from parent
  tableData = new MatTableDataSource<Crypto>(this.dataSource);

  displayedColumns: string[] = [
    'name', 
    'symbol', 
    'current_price', 
    'market_cap', 
    'total_volume', 
    'high_24h', 
    'low_24h', 
    'price_change_percentage_24h', 
    'last_updated'
  ]; 

  ngOnChanges() {
    this.tableData.data = this.dataSource; // Update table data when input changes
  }

  sortData(column: keyof Crypto, direction: 'asc' | 'desc') {
    this.tableData.data = this.tableData.data.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
  
      if (direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    this.tableData._updateChangeSubscription(); // Update the table data
  }

  clearSort() {
    this.tableData.data = this.dataSource; // Reset to original data
    this.tableData._updateChangeSubscription(); // Update the table data
  }
}