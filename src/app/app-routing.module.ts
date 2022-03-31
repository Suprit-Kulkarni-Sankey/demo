import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { AuthgaurdGuard } from './services/authgaurd.guard';
import { DeveloperpannerComponent } from './developerpanner/developerpanner.component';
import { AuthguardServiceService } from './services/authguard-service.service';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminpannelComponent,canActivate:[AuthgaurdGuard]},
  {path:'developer',component:DeveloperpannerComponent,canActivate:[AuthgaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
