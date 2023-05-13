import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-addInter',
  templateUrl: './addInter.component.html',
  styleUrls: ['./addInter.component.css']
})
export class AddInterComponent implements OnInit {

  inter:any
  id:any
  user_id:any
  idintervention:any
    constructor(private Route:ActivatedRoute,private Service:ReclamationService,private router:Router) { }

    ngOnInit() {
    this.id= this.Route.snapshot.params["id"]
    this.user_id=localStorage.getItem("id")
this.getAll(this.id)
this.Service.updatevalidation(this.id).subscribe(res=>{})

    }
    createInventaire(){
      console.log(this.idintervention,"eeee")
      if(this.inter===null){

        let obj=    {
          "date": "2023-05-09",
          "autre": "here text",
          "user_id":this.user_id,
          "reclamation_id":this.id
      }

      this.Service.addInter(obj).subscribe(res=>{
        console.log(res,"created")
        this.router.navigate(["home/interv/"+res.intervention.id])


      })

      }else{
       this.router.navigate(["home/interv/"+this.idintervention])
      }

    }
  async getAll(id:any){

    this.Service.getinvByreclamation(id).subscribe(async res=>{
      this.inter=res
      if(this.inter!=null){
        this.idintervention=res.id
        console.log("this.",this.idintervention)

      }
      await this.createInventaire()


    })

  }
  goInter(){
    this.router.navigate(["home/interv/"+this.inter.id])
  }
  goOption(){
    this.router.navigate(["home/option/"+this.id])
  }
  goDiag(){
    this.router.navigate(["home/interv/"+this.inter.id])

     }

}
