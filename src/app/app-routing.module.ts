import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { ConditionsUseSellComponent } from './conditions-use-sell/conditions-use-sell.component';
import { InterestBasedAddsComponent } from './interest-based-adds/interest-based-adds.component';
import { RefridgeratorComponent } from './refridgerator/refridgerator.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MouseComponent } from './mouse/mouse.component';
import { PrinterComponent } from './printer/printer.component';
import { MonitorComponent } from './monitor/monitor.component';
import { AirConditionerComponent } from './air-conditioner/air-conditioner.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { SoftToysComponent } from './soft-toys/soft-toys.component';
import { OutdoorSportsComponent } from './outdoor-sports/outdoor-sports.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { MakeupComponent } from './makeup/makeup.component';
import { WFootwearComponent } from './w-footwear/w-footwear.component';
import { WatchesComponent } from './watches/watches.component';
import { ClothingComponent } from './clothing/clothing.component';
import { FootwearComponent } from './footwear/footwear.component';
import { BagsWalletsComponent } from './bags-wallets/bags-wallets.component';
import { WWatchesComponent } from './w-watches/w-watches.component';
import { WClothingComponent } from './w-clothing/w-clothing.component';
import { FootwearHandbagsComponent } from './footwear-handbags/footwear-handbags.component';
import { FashionJwelleryComponent } from './fashion-jwellery/fashion-jwellery.component';
import { DetailsLaptopComponent } from './details/details-laptop/details-laptop.component';

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
  {
    component: RefridgeratorComponent,
    path: 'refridgerator',
  },
  {
    component: LaptopComponent,
    path: 'laptop',
  },
  {
    component: MouseComponent,
    path: 'mouse',
  },
  {
    component: PrinterComponent,
    path: 'printer',
  },
  {
    component: MonitorComponent,
    path: 'monitor',
  },
  {
    component: AirConditionerComponent,
    path: 'air-cond',
  },
  {
    component: TelevisionComponent,
    path: 'television',
  },
  {
    component: WashingMachineComponent,
    path: 'washing-machine',
  },
  {
    component: SmartphonesComponent,
    path: 'smartphones',
  },
  {
    component: SoftToysComponent,
    path: 'soft-toys',
  },
  {
    component: OutdoorSportsComponent,
    path: 'outdoor-sports',
  },
  {
    component: SkinCareComponent,
    path: 'skin-care',
  },
  {
    component: MakeupComponent,
    path: 'makeup',
  },
  {
    component: WFootwearComponent,
    path: 'w-footwear',
  },
  {
    component: WatchesComponent,
    path: 'watches',
  },
  {
    component: ClothingComponent,
    path: 'clothing',
  },
  {
    component: FootwearComponent,
    path: 'footwear',
  },
  {
    component: BagsWalletsComponent,
    path: 'bags-wallets',
  },
  {
    component: WWatchesComponent,
    path: 'w-watches',
  },
  {
    component: WClothingComponent,
    path: 'w-clothing',
  },
  {
    component: FootwearHandbagsComponent,
    path: 'footwear-handbag',
  },
  {
    component: FashionJwelleryComponent,
    path: 'fashion-jwellery',
  },
  {
    component: DetailsLaptopComponent,
    path: 'details-laptop',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
