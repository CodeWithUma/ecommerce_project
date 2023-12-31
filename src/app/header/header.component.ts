import { Component, OnInit, inject } from '@angular/core';
import { product, productName } from '../data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private product:ProductService, private route: Router) {}
  
  menuType: string = '';
  sellerName: string = '';
  userName: string = '';
  searchResult: undefined | product[];
  cartItems = 0;
  mobileNumber: number | undefined;

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
          this.product.getCartList(userData.id);
        } else {
          this.menuType = 'default';
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }
    this.product.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });
  }
  
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }

  submitSearch(val:string){
    this.route.navigate([`search/${val}`]);
  }

  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }

  userLogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/']);
    this.product.cartData.emit([]);
  }
}
