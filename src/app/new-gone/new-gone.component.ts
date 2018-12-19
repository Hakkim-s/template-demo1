import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-gone',
  templateUrl: './new-gone.component.html',
  styleUrls: ['./new-gone.component.css']
})
export class NewGoneComponent implements OnInit {
  newgone = 'yup..... IT is working';

  constructor() { }

  ngOnInit() {
  }

}
