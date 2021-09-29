import { Injectable } from '@angular/core';
import { Persona } from '../clases/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  post(persona:  Persona) {
    let personas:  Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
  }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('personas') || '[]');
  }
  clear() {
    localStorage.removeItem('personas');
  }
}
