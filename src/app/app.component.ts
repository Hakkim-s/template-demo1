import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}





// import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit {
//   pageTitle = " Angular component template" ;//interpolation{{}}
//   imgUrl = 'https://picsum.photos/225' ;//property binding[]
//   count = 0;//Event binding()
//   name : string;//two-way-binding[()]
//   userName : string ;
//   private _customerName : string ;
//   @ViewChild('nameRef') nameElementRef: ElementRef; //ngafterview

//   ngAfterViewInit() {
//     this.nameElementRef.nativeElement.focus();
//     console.log(this.nameElementRef);
//   }



//   get customerName(): string{
//     return this._customerName;
//   }

//   set customerName(value: string){
//     this._customerName = value ;
//     if(value === "Hakkim ") {
//       alert('Hi Hakkim ');
//     }
//   }

//   incrementCount() {
//     this.count  +=  1;
//   }
//   greetHakkim(updatedValue){
//     this.userName = updatedValue;
//     if(updatedValue === "Hakkim ") {
//       alert('Welcome Back Hakkim ');
//     }
//   }

// }
