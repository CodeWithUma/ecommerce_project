import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { ConditionsUseSellComponent } from './conditions-use-sell/conditions-use-sell.component';
import { InterestBasedAddsComponent } from './interest-based-adds/interest-based-adds.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: PrivacyNoticeComponent,
    path: 'privacy-notice',
  },
  {
    component: ConditionsUseSellComponent,
    path: 'conditions-use-sell',
  },
  {
    component: InterestBasedAddsComponent,
    path: 'interest-based-adds',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
