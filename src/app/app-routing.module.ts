import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroayudaComponent } from './comps/registroayuda/registroayuda.component';
import { TablaComponent } from './comps/tabla/tabla.component';

const routes: Routes = [
  {path:'',redirectTo:'registro',pathMatch:'full'},
  {path:'registro',component:RegistroayudaComponent},
  {path:'tabla',component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
