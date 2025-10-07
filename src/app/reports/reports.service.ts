import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  quantity: number;
  expirationDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private apiUrl = 'https://fake-inventory-api-pb0q.onrender.com/inventory';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(months => {
        return months.flatMap(month => month.products);
      })
    );
  }
}
