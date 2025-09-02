import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'study', component: StudyComponent, canActivate: [AuthGuard] },
  { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoPageFoundComponent }, // catch all unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
