import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';
  messageColor = '';

  onRegister() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.message = 'Debes llenar todos los campos.';
      this.messageColor = 'error';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      this.messageColor = 'error';
      return;
    }

    this.message = 'Usuario creado correctamente.';
    this.messageColor = 'success';

    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
