
export class Utulisateur extends Document {
  _id?: string;
  nom!: string;
  prenom!: string;
  email!: string;
  motPasse!: string;
  role!: number;
  tel!: number;
  img!: string;
  adresse!:string;

}
