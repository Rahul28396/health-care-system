import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  appointments = new Array(10).fill(1);
  chartOptions = {
    title: {
    	text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]                
  };
}
