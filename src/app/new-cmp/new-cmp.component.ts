import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp-fff',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = 'Entered in new component created';
  todaydate;
  newcomponentproperty;

  constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
      this.newcomponentproperty = this.myservice.serviceproperty;

   }

clickMethod(name: string) {
  if ( confirm('Are you sure to delete ' + name)) {
    console.log('Implement delete functionality here');
  }
}}
