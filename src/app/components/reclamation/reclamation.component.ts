import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
id:any
recs:any[]=[]
  constructor(private recS:ReclamationService,private route:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("id")
    console.log(this.id)
    this.getAll(this.id)
  }
getAll(id:any){
  this.recS.getfalserec().subscribe(res=>{
    console.log(res,"done")
    this.recs=res
  })
}
goIntervention(id:any){
  this.route.navigate(["/home/interadd/"+id])

}

}
