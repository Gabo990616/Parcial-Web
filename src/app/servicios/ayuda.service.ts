import { Injectable } from '@angular/core';
import { Ayuda } from '../clases/ayuda';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  constructor() { }
  post(ayuda:  Ayuda) {
    let ayudas:  Ayuda[] = [];
    if (this.get() != null) {
      ayudas = this.get();
    }
    ayudas.push(ayuda);
    localStorage.setItem('ayudas', JSON.stringify(ayudas));
  }
  get(): Ayuda[] {
    return JSON.parse(localStorage.getItem('ayudas') || '[]');
  }
  clear() {
    localStorage.removeItem('ayudas');
  }
}
