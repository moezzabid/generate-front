import { Component, OnInit } from '@angular/core';
import { ConfigurationDTO } from 'src/app/model/ConfigurationDTO';
import { NumberingCriteriaDTO } from 'src/app/model/NumberingCriteriaDTO';

import { NumberingService } from 'src/app/services/numbering.service';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  newCriteria: NumberingCriteriaDTO = { type: '', prefix: '', suffix: '', length: parseInt(""), order: parseInt("") };
  criteriaList: NumberingCriteriaDTO[] = [];
  configuration: ConfigurationDTO = { id: parseInt(""), criteria: [] };
  availableTypes = ['prénom', 'Nom', 'Date de naissance', 'compteur']; // Types disponibles initialement

  constructor(private numberingService: NumberingService) { }

  ngOnInit(): void {}

  addCriteria(): void {
      // Ajouter le critère à la liste
      this.criteriaList.push({ ...this.newCriteria });
      this.removeAvailableType(this.newCriteria.type);
      this.newCriteria = { type: '', prefix: '', suffix: '', length: parseInt(""), order: parseInt("") };
      alert('Critère ajouté avec succès !');
    
  }
  // Méthode pour retirer un type de la liste des options disponibles
  removeAvailableType(type: string): void {
    const index = this.availableTypes.indexOf(type);
    if (index !== -1) {
      this.availableTypes.splice(index, 1); 
    }
  }
  // Supprimer un critère du tableau et réajouter son type aux options disponibles
  deleteCriteria(index: number): void {
    const removed = this.criteriaList.splice(index, 1);
    if (removed.length > 0) {
      this.availableTypes.push(removed[0].type); 
      alert('Critère supprimé');
    }
  }

  // Réinitialiser la liste des options du select
  resetAvailableTypes(): void {
    this.availableTypes = ['first_name', 'last_name', 'birth_date', 'counter']; 
  }

  // Réinitialiser tous les champs et la liste
  resetForm(): void {
    this.criteriaList = [];
    this.newCriteria = { type: '', prefix: '', suffix: '', length: parseInt(""), order: parseInt("") };
    this.resetAvailableTypes(); 
  }

  // Envoyer la configuration au service
  onSubmit(): void {
    if (this.criteriaList.length === 0) {
      alert('Veuillez ajouter au moins un critère avant de sauvegarder.');
      return;
    }

    this.configuration.criteria = this.criteriaList;
    this.numberingService.saveConfiguration(this.configuration).subscribe(
      response => {
        alert('Configuration sauvegardée avec succès');
        this.resetForm();
      },
      error => {
        alert('Une erreur est survenue lors de la sauvegarde de la configuration');
      }
    );
  }
}
