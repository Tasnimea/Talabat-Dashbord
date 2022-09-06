import { Component, Input, OnInit } from '@angular/core';
import {InteractionService} from '../../service/interaction.service'
import {
  Auth,
  signInWithEmailAndPassword
  } from '@angular/fire/auth'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  //wanna pass it to Aside
  element= false;

  constructor(public auth:Auth , public _interactionservice:InteractionService, private router:Router) { }
  handelRigester(value:any){
    signInWithEmailAndPassword(this.auth,value.email,value.password)
    .then((response:any)=>{
      console.log(response.user)
      console.log(this.element)

    })
    .catch((err)=>{
      alert(err.message)
    })

        // console.log(value)
      }
      onLogout() {
        this.auth.signOut();
        this._interactionservice.sendMsg("false")

      }
      showData() {
this._interactionservice.sendMsg("true");
this.router.navigate(['/Dashboard'])
        // return (this.element = true);
      }
  ngOnInit(): void {
  }

}
