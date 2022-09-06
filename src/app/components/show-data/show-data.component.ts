import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {Router} from '@angular/router';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {


  Restrant:any
  filePath?:String
  meals:any
  name:string=""
  price:number=0
  searchTerm = '';
  term = '';
  searchRes:any
  itemtoedit:any
  items:any

  constructor(private curdService:CrudService, private afStorage: AngularFireStorage,private router:Router) {
    this.Restrant = []

  }

  ngOnInit(): void {

this.curdService.getRestrants().subscribe(data => {
this.Restrant = data.map(element => {
    return{
    id: element.payload.doc.id,
    Img:element.payload.doc.Image,
    ...element.payload.doc.data()

    }
  })


})



// this.curdService.getRestrantsID(this.Restrant.id).subscribe(data => {
//   this.Restrant = data.map(element => {
//       return element
//   }
//     )

// })

// this.afStorage.storage.ref().child.




  }
  delete(id:any){
    this.curdService.delete(id)
  }

  go(id:any){
    this.curdService.getRestrantsID(id)
    this.router.navigate([`/DisplayRestrant/${id}`])
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
    this.curdService.update_Restrant(data.id,rest);
    data.isedit=false
  }




  search(value: string): void {
    this.searchRes = this.Restrant.filter((val:any) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
