import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ayuda } from 'src/app/clases/ayuda';
import { AyudaService } from 'src/app/servicios/ayuda.service';

@Component({
  selector: 'app-registroayuda',
  templateUrl: './registroayuda.component.html',
  styleUrls: ['./registroayuda.component.css']
})
export class RegistroayudaComponent implements OnInit {
  ayuda!: Ayuda;
  constructor(private ayudaservice: AyudaService, private router: Router) { }

  ngOnInit(): void {
    this.ayuda = new Ayuda;

  }
  add() {
    if (this.ayuda.identificador != null && this.ayuda.tipo != null || this.ayuda.exist != null) {
      this.ayudaservice.post(this.ayuda);
      this.router.navigate(['/tabla']);
    } else {
      alert('Llene todos los campos');
    }

  }
  clear() {
    this.ayudaservice.clear();
    alert('todo borrado');
  }
}
