// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
import { map} from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  div{
     margin: 0 auto;
     text-align: center;
     width:200px;
  }
  .rotate{
     width:100px;
     height:100px;
     border:solid 1px red;
  }
`],
animations: [
  trigger('myanimation',[
     state('smaller',style({
        transform : 'translateY(100px)'
     })),
     state('larger',style({
        transform : 'translateY(0px)'
     })),
     transition('smaller <=> larger',animate('300ms ease-in'))
  ])
]
})



export class AppComponent implements AfterViewInit {
  pageTitle = ' Angular component template'; // interpolation{{}}
  imgUrl = 'https://picsum.photos/225'; // property binding[]
  count = 0; // Event binding()
  name: string; // two-way-binding[()]
  userName: string;
  private _customerName: string;


  //animation
    state: string = "smaller";
    animate() {
       this.state = this.state == 'larger' ? 'smaller' : 'larger';
    }


  constructor(private myservice: MyserviceService,
              private http: Http ) {}
  todaydate;
  componentproperty;
  httpdata;
  searchparam = 2;

  @ViewChild('nameRef') nameElementRef: ElementRef; // sngafterview

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = 'component created'; // value is changed.
    this.componentproperty = this.myservice.serviceproperty;

       this.http.get("http://jsonplaceholder.typicode.com/users?id=" + this.searchparam)
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.displaydata(data));

   }
  displaydata(data) {this.httpdata = data;}


  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Hakkim ') {
      alert('Hi Hakkim ');
    }
  }

  incrementCount() {
    this.count += 1;
  }
  greetHakkim(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === 'Hakkim ') {
      alert('Welcome Back Hakkim ');
    }
  }
}
