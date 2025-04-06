import { Component, OnInit } from '@angular/core';
import { GeneratedNumberDTO } from 'src/app/model/GeneratedNumberDTO';
import { NumberingService } from 'src/app/services/numbering.service';

@Component({
  selector: 'app-generate-number',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  generatedNumber: GeneratedNumberDTO = {
    configurationId: parseInt(""), 
    firstName: '',
    lastName: '',
    birthDate: '',
    counter: parseInt("")
  };

  generatedResult: string = ''; 

  constructor(private numberingService: NumberingService) { }

  ngOnInit(): void {}

  // Méthode pour générer le numéro
  generateNumber(): void {
    if (this.generatedNumber.configurationId && this.generatedNumber.firstName && this.generatedNumber.lastName && this.generatedNumber.birthDate) {
      this.numberingService.generateNumber(this.generatedNumber).subscribe(
        (response:any) => {

          this.generatedResult = response.generatedNumber;  
        },
        (error) => {
          console.log("rrr",error);

          alert('Une erreur est survenue lors de la génération du numéro');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs avant de générer un numéro.');
    }
  }

}
