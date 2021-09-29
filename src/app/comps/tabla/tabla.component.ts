import { Component, OnInit } from '@angular/core';
import { Ayuda } from 'src/app/clases/ayuda';
import { Persona } from 'src/app/clases/persona';
import { AyudaService } from 'src/app/servicios/ayuda.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
ayudas!:Ayuda[];
personas!:Persona[];
  constructor(private ayudaservice:AyudaService, private personaservice:PersonaService) { }

  ngOnInit(): void {
    this.ayudas=this.ayudaservice.get()
    this.personas=this.personaservice.get();
  }

}
