import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareaItemComponent } from '../../componentes/tarea-item/tarea-item.component';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [FormsModule, CommonModule,TareaItemComponent],
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {
  nombre: string = '';
  mensaje: string = '';
  tareas: string[] = ['Aprende Angular', 'Configurar GitHub', 'Crear componentes']
  nuevaTarea: string = '';

  saludar() {
    if (this.nombre.trim() === '') {
      this.mensaje = 'Por favor, escribí tu nombre.';
    } else {
      this.mensaje = `Hola, ${this.nombre}!`;
    }
  }
  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number){
    this.tareas.splice(index,1);
  }
}


