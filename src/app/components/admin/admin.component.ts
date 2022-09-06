import { Component, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  } from '@angular/fire/auth'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public auth:Auth) { }
  handelRigester(value:any){
    createUserWithEmailAndPassword(this.auth,value.email,value.password)
    .then((response:any)=>{
      console.log(response.user)
    })
    .catch((err)=>{
      alert(err.message)
    })

        // console.log(value)
      }


  ngOnInit(): void {

  }

}
