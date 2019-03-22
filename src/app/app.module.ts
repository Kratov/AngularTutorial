import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import {RouterModule,Route} from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

const route : Route[] = [
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent}  // TODO: Entender enrutamiento
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
