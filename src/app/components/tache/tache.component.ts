import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
options:any[]=[]
diagnostic:any[]=[]
inter:any[]=[]
id:any

  constructor(private service:TacheService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"]
    this.getOptions("Option",this.id)
    this.getInterv("Intervention",this.id)
    this.getDiag("diagnostic",this.id)

console.log(this.options,"options")
console.log(this.inter,"inter")


  }
  anti: any[] = [];
  can: any[] = [];
  sonede: any[] = [];
  bat: any[] = [];
  car: any[] = [];
  badge: any[] = [];
  autre: any[] = [];
  el: any[] = [];

  getOptions(type: any, id: any) {
    this.service.gettacheByTypeId(type, id).subscribe(res => {
      if (res != null) {
        this.options = res;
        const categories = ['Anti Démarrage', 'Can', 'Sonede Temp', 'Batterie', 'Carburant', 'Badge+Lecteur', 'Autre', 'Element De Facturation'];
        const tablesByCategory = {
          'Anti Démarrage': this.anti,
          'Can': this.can,
          'Sonede Temp': this.sonede,
          'Batterie': this.bat,
          'Carburant': this.car,
          'Badge+Lecteur': this.badge,
          'Autre': this.autre,
          'Element De Facturation': this.el
        };

        // Clear the tables before populating them again
        Object.values(tablesByCategory).forEach(table => table.length = 0);

        // Group the table rows by category
        this.options.forEach(row => {
          const table = tablesByCategory[row.categorie];
          if (table) {
            table.push(row);
          }
        });
      }
    });
  }


  alimentation: any[] = [];
  gps: any[] = [];
  gsm: any[] = [];
  sim: any[] = [];
  conf: any[] = [];

  getInterv(type: any, id: any) {
    this.service.gettacheByTypeId(type, id).subscribe(res => {
      if (res != null) {
        this.inter = res;
        console.log(this.inter, "zynek");

        const categories = ['Alimentation', 'GPS', 'GSM', 'SIM', 'Configuration & Mise en marche'];

        categories.forEach(category => {
          switch (category) {
            case 'Alimentation':
              this.alimentation = [];
              this.inter.forEach(row => {
                if (row.categorie === 'Alimentation') {
                  this.alimentation.push(row);
                }
              });
              console.log('alim', this.alimentation);
              break;
            case 'GPS':
              this.gps = [];
              this.inter.forEach(row => {
                if (row.categorie === 'GPS') {
                  this.gps.push(row);
                }
              });
              console.log('gps', this.gps);
              break;
            case 'GSM':
              this.gsm = [];
              this.inter.forEach(row => {
                if (row.categorie === 'GSM') {
                  this.gsm.push(row);
                }
              });
              console.log('gsm', this.gsm);
              break;
            case 'SIM':
              this.sim = [];
              this.inter.forEach(row => {
                if (row.categorie === 'SIM') {
                  this.sim.push(row);
                }
              });
              console.log('sim', this.sim);
              break;
            case 'Configuration & Mise en marche':
              this.conf = [];
              this.inter.forEach(row => {
                if (row.categorie === 'Configuration & Mise en marche') {
                  this.conf.push(row);
                }
              });
              console.log('conf', this.conf);
              break;
            default:
              break;
          }
        });
      }
    });
  }
  Diagalimentation:any[]=[]
  Diaggps: any[] = [];
  Diaggsm: any[] = [];
  Diagsim: any[] = [];
  Diagconf: any[] = [];

  getDiag(type: any, id: any) {
    this.service.gettacheByTypeId(type, id).subscribe((res) => {
      if (res != null) {
        this.diagnostic = res;

        // Clear the arrays before re-populating them
        this.Diagalimentation=[]
        this.Diaggps = [];
        this.Diaggsm = [];
        this.Diagsim = [];
        this.Diagconf = [];

        // Iterate over the data and push it to the appropriate array
        for (const diag of this.diagnostic) {
          switch (diag.categorie) {
            case 'Alimentation':
              this.Diagalimentation.push(diag);
              break;
            case 'GPS':
              this.Diaggps.push(diag);
              break;
            case 'GSM':
              this.Diaggsm.push(diag);
              break;
            case 'SIM':
              this.Diagsim.push(diag);
              break;
            case 'Configuration & Mise en marche':
              this.Diagconf.push(diag);
              break;
            default:
              break;
          }
        }
      }
    });
  }


}
