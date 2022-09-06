import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  chart:any=[]
  constructor() {Chart.register(...registerables) }

  ngOnInit(): void {
    this.chart=new Chart("myChart",{
      type: 'line',
      data:{
        labels : ['January','February','March','April','May','June','july'],
        datasets: [{
          label: 'products',

          borderColor: [
            'rgb(228, 69, 21)'
          ],
          data: [6, 15, 35, 19, 20, 30, 45 ,76],
        }]
      }
    })
  }}
