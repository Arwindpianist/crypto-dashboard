import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnChanges {
  @Input() dataSource: any[] = []; // ✅ Expect data from parent
  tableData = new MatTableDataSource<any>(this.dataSource);

  displayedColumns: string[] = ['name', 'price']; // ✅ Define columns

  ngOnChanges() {
    this.tableData.data = this.dataSource; // ✅ Update table data when input changes
  }
}
