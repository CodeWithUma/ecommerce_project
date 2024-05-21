import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConditionsUseSellComponent } from './conditions-use-sell/conditions-use-sell.component';
import { InterestBasedAddsComponent } from './interest-based-adds/interest-based-adds.component';
import { RefridgeratorComponent } from './products/refridgerator/refridgerator.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MouseComponent } from './products/mouse/mouse.component';
import { PrinterComponent } from './products/printer/printer.component';
import { MonitorComponent } from './products/monitor/monitor.component';
import { AirConditionerComponent } from './products/air-conditioner/air-conditioner.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { SmartphonesComponent } from './products/smartphones/smartphones.component';
import { SoftToysComponent } from './products/soft-toys/soft-toys.component';
import { OutdoorSportsComponent } from './products/outdoor-sports/outdoor-sports.component';
import { SkinCareComponent } from './products/skin-care/skin-care.component';
import { MakeupComponent } from './products/makeup/makeup.component';
import { WFootwearComponent } from './products/w-footwear/w-footwear.component';
import { WatchesComponent } from './products/watches/watches.component';
import { ClothingComponent } from './products/clothing/clothing.component';
import { FootwearComponent } from './products/footwear/footwear.component';
import { BagsWalletsComponent } from './products/bags-wallets/bags-wallets.component';
import { WWatchesComponent } from './products/w-watches/w-watches.component';
import { WClothingComponent } from './products/w-clothing/w-clothing.component';
import { FootwearHandbagsComponent } from './products/footwear-handbags/footwear-handbags.component';
import { FashionJwelleryComponent } from './products/fashion-jwellery/fashion-jwellery.component';
import { DetailsLaptopComponent } from './details/details-laptop/details-laptop.component';
import { DetailsMouseComponent } from './details/details-mouse/details-mouse.component';
import { DetailsPrinterComponent } from './details/details-printer/details-printer.component';
import { DetailsMonitorComponent } from './details/details-monitor/details-monitor.component';
import { DetailsAcComponent } from './details/details-ac/details-ac.component';
import { DetailsRefridgeratorComponent } from './details/details-refridgerator/details-refridgerator.component';
import { DetailsTvComponent } from './details/details-tv/details-tv.component';
import { DetailsWashingMachineComponent } from './details/details-washing-machine/details-washing-machine.component';
import { SearchComponent } from './features/search/search.component';
import { CartComponent } from './features/cart/cart.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { UserAuthComponent } from './features/user-auth/user-auth.component';
import { AuthGuard } from './auth.guard';

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
    canActivate: [AuthGuard]
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
    path: 'details/:productId',
  },
  {
    component: DetailsMouseComponent,
    path: 'details_mouse/:productId',
  },
  {
    component: DetailsPrinterComponent,
    path: 'details_printer/:productId',
  },
  {
    component: DetailsMonitorComponent,
    path: 'details_monitor/:productId',
  },
  {
    component: DetailsAcComponent,
    path: 'details_ac/:productId',
  },
  {
    component: DetailsRefridgeratorComponent,
    path: 'details_refridgerator/:productId',
  },
  {
    component: DetailsTvComponent,
    path: 'details_tv/:productId',
  },
  {
    component: DetailsWashingMachineComponent,
    path: 'details_wm/:productId',
  },
  {
    component: SearchComponent,
    path: 'search/:query'
  },
  {
    component: CartComponent,
    path: 'cart-page'
  },
  {
    component:UserAuthComponent,
    path:'user-auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
