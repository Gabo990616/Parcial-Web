import { Component, OnInit } from '@angular/core';
import { Ayuda } from 'src/app/clases/ayuda';
import { AyudaService } from 'src/app/servicios/ayuda.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
ayudas!:Ayuda[];
  constructor(private ayudaservice:AyudaService) { }

  ngOnInit(): void {
    this.ayudas=this.ayudaservice.get()
  }

}
