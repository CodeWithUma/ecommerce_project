import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  cartData = new EventEmitter<product[] | []>();

  laptopProductList() {
    return this.http.get<product[]>('http://localhost:3000/laptop_product_list?_limit=15');
  }

  getLaptopProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/laptop_product_list/${id}`);
  }
  
  mouseProductList() {
    return this.http.get<product[]>('http://localhost:3000/mouse_product_list?_limit=15');
  }

  getMouseProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/mouse_product_list/${id}`);
  }
  
  printerProductList() {
    return this.http.get<product[]>('http://localhost:3000/printer_product_list?_limit=15');
  }

  getPrinterProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/printer_product_list/${id}`);
  }
  
  monitorProductList() {
    return this.http.get<product[]>('http://localhost:3000/monitor_product_list?_limit=15');
  }

  getMonitorProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/monitor_product_list/${id}`);
  }
  
  acProductList() {
    return this.http.get<product[]>('http://localhost:3000/ac_product_list?_limit=15');
  }

  getACProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/ac_product_list/${id}`);
  }
  
  refridgeratorProductList() {
    return this.http.get<product[]>('http://localhost:3000/refridgerator_product_list?_limit=15');
  }

  getRefridgeratorProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/refridgerator_product_list/${id}`);
  }
  
  tvProductList() {
    return this.http.get<product[]>('http://localhost:3000/tv_product_list?_limit=15');
  }

  getTVProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/tv_product_list/${id}`);
  }
  
  wmProductList() {
    return this.http.get<product[]>('http://localhost:3000/wm_product_list?_limit=15');
  }

  getWMProductList(id: string) {
    return this.http.get<product>(`http://localhost:3000/wm_product_list/${id}`);
  }
}
