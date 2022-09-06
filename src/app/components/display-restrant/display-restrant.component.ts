import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-display-restrant',
  templateUrl: './display-restrant.component.html',
  styleUrls: ['./display-restrant.component.css']
})
export class DisplayRestrantComponent implements OnInit {
  Restrant:any
  Restrant1:any

  filePath?:String
  meals:any
  name:string=""
  price:number=0
  searchTerm = '';
  term = '';
  searchRes:any
  itemtoedit:any
  items:any
 RestrantID:any
  constructor(private curdService:CrudService,private fg:AngularFireStorage,private activatedRoute: ActivatedRoute
    ,private router:Router)
  {}

  ngOnInit(): void {

    this.RestrantID=this.activatedRoute.snapshot.paramMap.get('id');

    // this.curdService.getRestrantsID(id).subscribe(data => {
    //   this.Restrant =data
    //   console.log(data)
    // })
    this.curdService.getRestrantsID(this.RestrantID).subscribe(data => {
      this.Restrant = data.payload.data()
      })



// this.afStorage.storage.ref().child.
  }





  delete(){
    this.curdService.delete(this.activatedRoute.snapshot.paramMap.get('id'))
    alert(" Restrant deleted successfully")
    this.router.navigate([`/ShowData`])
  }


  deleteMeal ( resID:any,x:any){
    this.curdService.deleteMeal1(resID, x)
  }

  editRes(Restrant:any){
    Restrant.isedit=true
    Restrant.editname=this.Restrant.name;
    Restrant.editaddress=this.Restrant.adress;
  }

  
  updatedItem(data:any){
    let rest:any={}
    rest['name'] =data.editname;
    rest['adress'] =data.editaddress;
    console.log(data);
    this.curdService.update_Restrant(this.RestrantID,rest);
    data.isedit=false
  }




  search(value: string): void {
    this.searchRes = this.Restrant.filter((val:any) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
