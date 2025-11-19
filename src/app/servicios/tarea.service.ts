import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tareas.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  obtenerTareas(): Tarea[] {
    return [...this.tareas]; // Retornamos una copia
  }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
    this.guardarEnLocalStorage();
  }

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
    this.guardarEnLocalStorage();
  }

  alternarCompletado(index: number): void {
    this.tareas[index].completada = !this.tareas[index].completada;
    this.guardarEnLocalStorage();
  }

  filtrarPorPrioridad(prioridad: string): Tarea[] {
    if (prioridad === 'todas') {
      return [...this.tareas];
    }
    return this.tareas.filter(t => t.prioridad === prioridad);
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  private cargarDesdeLocalStorage(): void {
    const datos = localStorage.getItem('tareas');
    if (datos) {
      this.tareas = JSON.parse(datos);
    }
  }
  get tareasPendientes(): number {
    return this.tareas.filter(t => !t.completada).length;
  }
  
  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

  get tareasTotales(): number{
    return this.tareas.length;
  }
}
