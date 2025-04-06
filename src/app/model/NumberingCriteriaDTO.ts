export interface NumberingCriteriaDTO {
    type: string;  // Exemple : "first_name", "last_name", "birth_date", "counter"
    prefix: string;
    suffix: string;
    length: number;
    order: number;
  }