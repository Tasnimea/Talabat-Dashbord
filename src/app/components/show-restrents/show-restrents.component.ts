import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-show-restrents',
  templateUrl: './show-restrents.component.html',
  styleUrls: ['./show-restrents.component.css']
})
export class ShowRestrentsComponent implements OnInit {
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

  constructor(private curdService:CrudService, private afStorage: AngularFireStorage) {
    this.Restrant = []

  }

  ngOnInit(): void {

this.curdService.getRestrants().subscribe(data => {
this.Restrant = data.map(element => {
    return{
    id: element.payload.doc.id,
    Img:element.payload.doc.Image,
    isedit:false,
    ...element.payload.doc.data()
    }
  })


})

// this.afStorage.storage.ref().child.

  }
  delete(id:any){
    this.curdService.delete(id)
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
