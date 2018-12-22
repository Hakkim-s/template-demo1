import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewGoneComponent } from './new-gone/new-gone.component';
import {MyserviceService} from './myservice.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewGoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'new-cmp-fff',
         component: NewCmpComponent},
         {
           path: 'new-gone',
           component: NewGoneComponent }
   ])  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
