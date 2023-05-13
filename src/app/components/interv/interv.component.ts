import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-interv',
  templateUrl: './interv.component.html',
  styleUrls: ['./interv.component.css']
})
export class IntervComponent implements OnInit {
idInterv:any
taches=[]

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
      "type":"Intervention",
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
