import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './footer/footer.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { ConditionsUseSellComponent } from './conditions-use-sell/conditions-use-sell.component';
import { InterestBasedAddsComponent } from './interest-based-adds/interest-based-adds.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupModalContentComponent } from './signup-modal-content/signup-modal-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefridgeratorComponent } from './refridgerator/refridgerator.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PrivacyNoticeComponent,
    ConditionsUseSellComponent,
    InterestBasedAddsComponent,
    ModalContentComponent,
    SignupModalContentComponent,
    RefridgeratorComponent,
    LaptopComponent,
    MouseComponent,
    PrinterComponent,
    MonitorComponent,
    AirConditionerComponent,
    TelevisionComponent,
    WashingMachineComponent,
    SmartphonesComponent,
    SoftToysComponent,
    OutdoorSportsComponent,
    SkinCareComponent,
    MakeupComponent,
    WFootwearComponent,
    WatchesComponent,
    ClothingComponent,
    FootwearComponent,
    BagsWalletsComponent,
    WWatchesComponent,
    WClothingComponent,
    FootwearHandbagsComponent,
    FashionJwelleryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
