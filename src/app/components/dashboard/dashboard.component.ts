import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart:any=[]

  constructor() {Chart.register(...registerables) }

  ngOnInit(): void {

    this.chart=new Chart("myChart",{
      type: 'bar',
      data:{
        labels : ['January','February','March','April','May','June','july'],
        datasets: [{
          label: 'products',
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(223, 226, 48, 0.7)',
            'rgba(72, 190, 25, 0.8)',
            'rgba(228, 69, 21, 0.7)',

          ],
          borderColor: [
            'rgb(228, 69, 21)',
            'rgb(71, 124, 50)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',

          ],
          data: [40, 85, 35, 79, 50, 30, 45 ,76],
        }]
      }
    })
  }}



