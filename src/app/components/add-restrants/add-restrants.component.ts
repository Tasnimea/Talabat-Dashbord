import { AngularFireStorage} from '@angular/fire/compat/storage';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from './../../Modules/file-upload.model';

@Component({
  selector: 'app-add-restrants',
  templateUrl: './add-restrants.component.html',
  styleUrls: ['./add-restrants.component.css']
})
export class AddRestrantsComponent  implements OnInit{

  title = 'talabat';
  filePath?:any
  selectedFile?: File ;
  fbb?:any;
  downloadURL?: Observable<string>;

  usrFormGroup: FormGroup;
  Resturant :any
  ResturantImg:any
  xfile:any
  _crudservices : any;
  meals:any

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

constructor( crudservices:CrudService ,private fb: FormBuilder,private afStorage:AngularFireStorage, private router:Router){
    this._crudservices=crudservices;
    this.usrFormGroup=this.fb.group({
      ResturantName:['', [Validators.required,Validators.minLength(1)]],
      ResturantAddress:['',[ Validators.required]],
      ResturantCuisines:['', [Validators.required]],
      MinOrderAmount:['', [Validators.required]],
      Delivery:['', [Validators.required]],
      ResturantImg:[this.fbb],
      meals: new FormArray([]),

    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      price: '',
    });
  }
  addItem(): void {
    this.meals = this.usrFormGroup.get('meals') as FormArray;
    this.meals.push(this.createItem());
  }

  get orders() {
    return this.usrFormGroup.get('meals') as FormArray;
  }

createRecord() {
    console.log(this.usrFormGroup);
    let Record: any = {};
    Record['name'] = this.usrFormGroup.controls['ResturantName'].value;
    Record['adress'] = this.usrFormGroup.controls['ResturantAddress'].value.toLowerCase();
    Record['meals'] = this.usrFormGroup.controls['meals'].value;
    Record['Image'] =this.fbb
    Record['Cuisines'] = this.usrFormGroup.controls["ResturantCuisines"].value
    Record['MinOrderAmount'] = this.usrFormGroup.controls["MinOrderAmount"].value
    Record['Delivery'] = this.usrFormGroup.controls["Delivery"].value
    this._crudservices.creatNewResturant(Record)
    this.router.navigate([`/ShowData`])
  }


  get ResturantName(){
    return this.usrFormGroup.get('ResturantName');
  }
  get ResturantAddress(){
    return this.usrFormGroup.get('ResturantAddress');
  }

  get ResturantCuisines(){
    return this.usrFormGroup.get('ResturantCuisines');
  }

  get MinOrderAmount(){
    return this.usrFormGroup.get('MinOrderAmount');
  }



  get Delivery(){
    return this.usrFormGroup.get('Delivery');
  }
  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.afStorage.ref(filePath);
    const task= this.afStorage.upload(`RoomsImages/${n}`, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fbb = url;
            }
            console.log(this.fbb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

//   upload(event?:any) {
//     this.filePath = event.target.files[0]
//   }
//   uploadImage():Observable<any>{
//   this.ResturantImg=  this.afStorage.upload('/images/'+Math.random()+this.filePath, this.filePath);

//    console.log(this.filePath)
// this.ResturantImg= this.afStorage.refFromURL
// return this.xfile.percentageChanges()
//   }

// onFileSelected(event?:any) {
//   var n = Date.now();
//   const file = event.target.files[0];
//   const filePath = `RoomsImages/${n}`;
//   const fileRef = this.afStorage.ref(filePath);
//   const task = this.afStorage.upload(`RoomsImages/${n}`, file);
//   task
//     .snapshotChanges()
//     .pipe(
//       finalize(() => {
//         this.downloadURL = fileRef.getDownloadURL();
//         this.downloadURL.subscribe(url => {
//           if (url) {
//             this.fbb = url;
//           }
//           console.log(this.fbb);
//         });
//       })
//     )
//     .subscribe(url => {
//       if (url) {
//         console.log(url);
//       }
//     });
// }







ngOnInit(): void {



}


// selectFile(event: any): void {
//   this.selectedFiles = event.target.files;

// }

// upload(): void {
//   if (this.selectedFiles) {
//     const file: File | null = this.selectedFiles.item(0);
//     this.selectedFiles = undefined;

//     if (file) {
//       this.currentFileUpload = new FileUpload(file);
//       this._crudservices.pushFileToStorage(this.currentFileUpload).subscribe(
//         (percentage:any) => {
//           this.percentage = Math.round(percentage ? percentage : 0);
//         },
//         (error:any) => {
//           console.log(error);
//         }
//       );
//     }
//   }
// }


}
