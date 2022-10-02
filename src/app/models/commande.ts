
export class Commande  {
  idU!: string;
  produit!: Produit[];
  date!: string;
  prix!: number;
  payer!: boolean;
  adresse!:string;
  tel!: number;
  nom!: string;

}


export  class Produit{

  id!:string;
  prix!:number;
  quantite!:number;
}
