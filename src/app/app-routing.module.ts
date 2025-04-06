import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';
import { GenerateComponent } from './components/generate/generate.component';

const routes: Routes = [
  { path: '', redirectTo: '/config', pathMatch: 'full' },
  { path: 'config', component: ConfigurationFormComponent },
  { path: 'generate', component: GenerateComponent },
  { path: '**', redirectTo: '/config' } // Redirige vers la page de configuration en cas d'URL invalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
