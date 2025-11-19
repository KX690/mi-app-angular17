import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TareaItemComponent } from '../../componentes/tarea-item/tarea-item.component';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tareas.model';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule, FormsModule, TareaItemComponent],
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {
  nombre: string = '';
  mensaje: string = '';

  nuevaTarea: Tarea = {
    texto: '',
    prioridad: 'media',
    completada: false
  };

  filtroPrioridad: string = 'todas';

  constructor(private tareaService: TareaService) {}

  

  get tareasFiltradas(): Tarea[] {
    return this.tareaService.filtrarPorPrioridad(this.filtroPrioridad);
  }

  saludar(): void {
    this.mensaje = `Hola, ${this.nombre}!`;
  }

  agregarTarea(): void {
    if (this.nuevaTarea.texto.trim() === '') return;

    this.tareaService.agregarTarea({ ...this.nuevaTarea });
    this.nuevaTarea.texto = '';
    this.nuevaTarea.prioridad = 'media';
  }

  eliminarTarea(index: number): void {
    this.tareaService.eliminarTarea(index);
  }

  alternarCompletado(index: number): void {
    this.tareaService.alternarCompletado(index);
  }

  get total(): number {
    return this.tareaService.obtenerTareas().length;
  }

  get completadas(): number {
    return this.tareaService.obtenerTareas().filter(t => t.completada).length;
  }

  get pendientes(): number {
    return this.total - this.completadas;
  }

  get tareasPendientes(): number {
    return this.tareaService.tareasPendientes;
  }

  get tareasCompletadas() {
  return this.tareaService.tareasCompletadas;
  }

  get tareasTotales(){
    return this.tareaService.tareasTotales;
  }
}



