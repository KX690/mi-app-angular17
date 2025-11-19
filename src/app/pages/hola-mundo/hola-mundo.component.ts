import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {
  nombre: string = '';
  mensaje: string = '';

  saludar() {
  if (this.nombre.trim() === '') {
    this.mensaje = 'Por favor, escribí tu nombre.';
  } else {
    this.mensaje = `Hola, ${this.nombre}!`;
  }
}

}
