import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GenerateComponent } from './components/generate/generate.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationFormComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,   
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
