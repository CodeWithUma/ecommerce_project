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
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductLocationComponent } from './product-location/product-location.component';
import { DetailsLaptopComponent } from './details/details-laptop/details-laptop.component';
import { DetailsMouseComponent } from './details/details-mouse/details-mouse.component';
import { DetailsPrinterComponent } from './details/details-printer/details-printer.component';
import { DetailsMonitorComponent } from './details/details-monitor/details-monitor.component';
import { DetailsAcComponent } from './details/details-ac/details-ac.component';
import { DetailsRefridgeratorComponent } from './details/details-refridgerator/details-refridgerator.component';
import { DetailsTvComponent } from './details/details-tv/details-tv.component';
import { DetailsWashingMachineComponent } from './details/details-washing-machine/details-washing-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyNoticeComponent,
    ConditionsUseSellComponent,
    InterestBasedAddsComponent,
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
    FashionJwelleryComponent,
    ProductLocationComponent,
    DetailsLaptopComponent,
    DetailsMouseComponent,
    DetailsPrinterComponent,
    DetailsMonitorComponent,
    DetailsAcComponent,
    DetailsRefridgeratorComponent,
    DetailsTvComponent,
    DetailsWashingMachineComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule,
    NgbRatingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    NgbModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
