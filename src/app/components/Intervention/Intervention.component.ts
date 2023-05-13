import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-Intervention',
  templateUrl: './Intervention.component.html',
  styleUrls: ['./Intervention.component.css']
})
export class InterventionComponent implements OnInit {
user_id:any
inters:any[]=[]
  constructor(private service:ReclamationService,
   private router:Router) { }

  ngOnInit() {
    this.user_id=localStorage.getItem("id")
    this.getInter(this.user_id)
  }
getInter(id:any){
this.service.getInterByUser(id).subscribe(res=>{
  console.log(res,"mochkoltou")
  if(res!=null){
    this.inters=res.interventions

  }
})
}
gotache(id:any){
  this.router.navigate(["/home/tache/"+id])
}
}
