import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService, Product } from './reports.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  allProducts: Product[] = [];
  lowQuantityProducts: Product[] = [];
  expiringSoonProducts: Product[] = [];
  loading = true;

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reportsService.getAllProducts().subscribe(products => {
      this.allProducts = products;
      this.loading = false;
      this.generateReports();
    });
  }

  generateReports(): void {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    this.expiringSoonProducts = this.allProducts.filter(p => {
      const expDate = new Date(p.expirationDate);
      return expDate >= today && expDate <= nextWeek;
    });

    this.lowQuantityProducts = this.allProducts.filter(p => {
      const expDate = new Date(p.expirationDate);
      return p.quantity < 10 && expDate >= today;
    });
  }

  exportPDF(): void {
    const data = document.getElementById('report-section');
    if (!data) return;

    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('reporte-inventario.pdf');
    });
  }
}
