import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroayudaComponent } from './comps/registroayuda/registroayuda.component';
import { RegistropersonasComponent } from './comps/registropersonas/registropersonas.component';
import { TablaComponent } from './comps/tabla/tabla.component';
import { MenuComponent } from './comps/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroayudaComponent,
    RegistropersonasComponent,
    TablaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
