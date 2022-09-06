import { Component, OnInit } from '@angular/core';
import {InteractionService} from '../../service/interaction.service'


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./..//../app.component.css']
})
export class AsideComponent implements OnInit {
  element: boolean = false;

  constructor(public _interactionservice:InteractionService) { }

  ngOnInit(): void {
    this._interactionservice.msg$.subscribe(
      message =>{
        if (message===("true")){
          this.element=true
        }else if(message===("false")) {
          this.element=false

        }
      }
    )
  }

}
