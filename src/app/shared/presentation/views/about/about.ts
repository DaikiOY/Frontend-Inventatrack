import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../inventory/product.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  newProduct: Product = {
    id: 0,
    categoryId: 0,
    name: '',
    quantity: 0,
    expirationDate: ''
  };

  products: Product[] = [];
  message = '';
  messageType: 'success' | 'error' | '' = '';

  ngOnInit() {
    const saved = localStorage.getItem('todayProducts');
    if (saved) this.products = JSON.parse(saved);
  }

  addProduct() {
    if (
      !this.newProduct.name ||
      this.newProduct.quantity <= 0 ||
      !this.newProduct.expirationDate
    ) {
      this.message = '⚠️ Por favor, completa todos los campos correctamente.';
      this.messageType = 'error';
      return;
    }

    this.newProduct.id = this.products.length + 1;
    this.products.push({ ...this.newProduct });

    localStorage.setItem('todayProducts', JSON.stringify(this.products));

    this.message = '✅ Producto añadido exitosamente.';
    this.messageType = 'success';

    this.newProduct = {
      id: 0,
      categoryId: 0,
      name: '',
      quantity: 0,
      expirationDate: ''
    };
  }
}
