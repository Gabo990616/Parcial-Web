import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ayuda } from 'src/app/clases/ayuda';
import { Persona } from 'src/app/clases/persona';
import { AyudaService } from 'src/app/servicios/ayuda.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-registropersonas',
  templateUrl: './registropersonas.component.html',
  styleUrls: ['./registropersonas.component.css']
})
export class RegistropersonasComponent implements OnInit {
  persona!: Persona;
  ayudas!: Ayuda[];
  personas!: Persona[];
  constructor(private personaservice: PersonaService, private ayudaservice: AyudaService, private router: Router) { }

  ngOnInit(): void {
    this.persona = new Persona;
    this.personas = this.personaservice.get();
    this.ayudas = this.ayudaservice.get();
  }
  add() {
    if (this.persona.identificacion != null && this.persona.nombre != null && this.persona.tipo != null) {
      var i = 0;
      var j = 0;
      var cont = false;
      while (i < this.personas.length && cont === false) {
        if (this.personas[i].identificacion === this.persona.identificacion) {
          cont = true;
        }
        i++;
      }
      while (this.ayudas[j].tipo!=this.persona.tipo) {
        j++;
      }
      if (cont === false) {
        if (this.ayudas[j].exist > 0) {
          this.ayudaservice.restExist(this.persona.tipo)
          this.personaservice.post(this.persona);
          this.router.navigate(['/tabla']);
        } else {
          alert('Ya no quedan ' + this.persona.tipo)
        }
      } else {
        alert('Ya esta persona recibio una ayuda (' + this.personas[i - 1].tipo + ')')
      }
    } else {
      alert('Llene todos los campos');
    }

  }
  clear() {
    this.personaservice.clear();
    alert('todo borrado');
  }
}
