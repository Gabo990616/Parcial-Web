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
  constructor(private personaservice: PersonaService, private ayudaservice: AyudaService, private router:Router) { }

  ngOnInit(): void {
  }
  add() {
    if (this.persona.identificacion != null &&this.persona.nombre != null && this.persona.tipo != null) {
      this.ayudaservice.post(this.persona);
      this.router.navigate(['/tabla']);
    } else {
      alert('Llene todos los campos');
    }

  }
  clear() {
    this.personaservice.clear();
    alert('todo borrado');
  }
}
