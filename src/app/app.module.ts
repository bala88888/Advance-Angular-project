import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { StudyComponent } from './study/study.component';
import { DemoComponent } from './demo/demo.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SpopupComponent } from './spopup/spopup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoInterceptor } from './info.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    StudyComponent,
    DemoComponent,
    NoPageFoundComponent,
    LoginComponent,
    SpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ 
    //application of interceptors=======================================
     { provide: HTTP_INTERCEPTORS, useClass:InfoInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
