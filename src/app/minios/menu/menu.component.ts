import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nombre : string = '';
  @Output() buscarMinion = new EventEmitter<string>();
  
  buscar(){
    this.buscarMinion.emit(this.nombre);
  }  
  
}
