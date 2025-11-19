import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-item.component.html',
  styleUrl: './tarea-item.component.css'
})
export class TareaItemComponent {
    @Input() tarea: string = '';
    @Input() index!: number;
    @Output() eliminar = new EventEmitter<number>();

    onEliminar(){
      this.eliminar.emit(this.index);
    }
}
