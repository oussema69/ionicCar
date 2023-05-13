import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  taches=[]
  autre:string=""
  el:string=""

  idInterv:any
  constructor(private router:Router,private route:ActivatedRoute,
    public alertController: AlertController,
    private tacheS:TacheService) { }

  ngOnInit() {
    this.idInterv=this.route.snapshot.params["id"]
  }
  goInter(){
    this.router.navigate(["home/interv/"+this.idInterv])
  }
  goOption(){
    this.router.navigate(["home/option/"+this.idInterv])
  }
  goDiag(){
    this.router.navigate(["home/diag/"+this.idInterv])
  }

  onCheckboxChange(event: any, category: string, value: string) {
    const isChecked = event.detail.checked;
    console.log("categorie est", category, "value is", value);
    "tasks"
    let tache = {
      "categorie": category,
      "value": value,
      "type":"Option",
      "intervention_id": this.idInterv
    };

    if (isChecked) {
      // Check if tache already exists in the array
      const index = this.taches.findIndex(item => item.categorie === category && item.value === value);
      if (index === -1) {
        // Tache does not exist in the array, so add it
        this.taches.push(tache);
      }
    } else {
      // Remove tache from the array
      const index = this.taches.findIndex(item => item.categorie === category && item.value === value);
      if (index !== -1) {
        this.taches.splice(index, 1);
      }
    }

    console.log("taches", this.taches);
  }
  async presentAlert(msg:any) {
    const alert = await this.alertController.create({
      header: 'Felicitation',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit(){
    let tacheautre = {
      "categorie": "Autre",
      "value": this.autre,
      "type":"Option",
      "intervention_id": this.idInterv
    };
    let tacheel = {
      "categorie": "Element De Facturation",
      "value": this.el,
      "type":"Option",
      "intervention_id": this.idInterv
    };
console.log("el:",this.el,"autre:",this.autre)
if(this.el!=null && this.autre!=null){
  this.taches.push(tacheautre)
  this.taches.push(tacheel)
}


    let msg='vous avez créer une nouvelle tache'
    let msg1='vous devez coisir aux moin une tache'
    if(this.taches.length===0){
      this.presentAlert(msg1)

    }else{
      const requestBody = {
        tasks: this.taches
      };
      console.log("taches button",requestBody);
      this.tacheS.add(requestBody).subscribe(res=>{
     this.presentAlert(msg)
      })
    }

  }
}
