import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { Whatdewho2Component } from './whatdewho2/whatdewho2.component';
import { STUDIESComponent } from './studies/studies.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { PricingComponent } from './pricing/pricing.component';
import { WhoareweoneComponent } from './whoareweone/whoareweone.component';
import { WhoarewetowComponent } from './whoarewetow/whoarewetow.component'; 
const routes: Routes = [


  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },{
     path: '',
     component: HeaderComponent
  },
  { path: 'one', component: WhoareweoneComponent },
  { path: 'tow', component: WhoarewetowComponent }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
