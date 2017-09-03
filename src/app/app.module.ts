import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from "./components/profile.component";
import { HttpModule } from "@angular/http";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
