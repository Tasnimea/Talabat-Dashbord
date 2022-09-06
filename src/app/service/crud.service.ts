import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../Modules/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ResturantImg?:[];
  private basePath = '/uploads';


  constructor(public fireservices:AngularFirestore,private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  creatNewResturant(Record:any){

return this.fireservices.collection('Resturant').add(Record)
  }


// getAllGoods(){
// return this.fireservice.collection('goods').valueChanges();
// }

getRestrants(): Observable<any[]> {
  return  this.fireservices.collection('Resturant').snapshotChanges()

 }

 getRestrantsID(id:any) {
  return  this.fireservices.doc(`Resturant/${id}`).snapshotChanges();
 }

 delete(id:any){
  return  this.fireservices.doc(`Resturant/${id}`).delete();
}

deleteMeal1(resID:any , index:any){
  return this.fireservices.doc(`Resturant/${resID}`).set({'meals':
  {[index]:index.delete() }}, {merge: true})
}

deleteMeal(id:any , index:any){
  return this.fireservices.collection("Resturant").doc(`${id}`).set({'meals':
  {[index]:index.delete() }}, {merge: true});
}





update_Restrant(resid:any,resdata:any){
  return  this.fireservices.doc('Resturant/'+resid).update(resdata)
}

updateItem(item: any){
return this.fireservices.doc(`items/${item.id}`).update(item);
}

//  getImages() {
//   return this.http.get<{[key: string]: any}>('https://angularimageupload-3f681.firebaseio.com/.json').pipe( map (responseData => {
//     const albumArray: RestrantImg[]=[]
//     for(const key in responseData) {
//       if(responseData.hasOwnProperty(key)) {
//         albumArray.push({ ...responseData[key], id: key })
//       }
//     }
//     return albumArray;

//   }))
// }




// pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
//   const filePath = `${this.basePath}/${fileUpload.file.name}`;
//   const storageRef = this.storage.ref(filePath);
//   const uploadTask = this.storage.upload(filePath, fileUpload.file);

//   uploadTask.snapshotChanges().pipe(
//     finalize(() => {
//       storageRef.getDownloadURL().subscribe(downloadURL => {
//         fileUpload.url = downloadURL;
//         fileUpload.name = fileUpload.file.name;
//         this.saveFileData(fileUpload);
//       });
//     })
//   ).subscribe();

//   return uploadTask.percentageChanges();
// }

// private saveFileData(fileUpload: FileUpload): void {
//   this.db.list(this.basePath).push(fileUpload);
// }

// getFiles(numberItems: number): AngularFireList<FileUpload> {
//   return this.db.list(this.basePath, ref =>
//     ref.limitToLast(numberItems));
// }

// deleteFile(fileUpload: FileUpload): void {
//   this.deleteFileDatabase(fileUpload.key)
//     .then(() => {
//       this.deleteFileStorage(fileUpload.name);
//     })
//     .catch(error => console.log(error));
// }

// private deleteFileDatabase(key: string): Promise<void> {
//   return this.db.list(this.basePath).remove(key);
// }

// private deleteFileStorage(name: string): void {
//   const storageRef = this.storage.ref(this.basePath);
//   storageRef.child(name).delete();
// }

 }

