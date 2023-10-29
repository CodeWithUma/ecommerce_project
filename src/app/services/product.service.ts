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
    return this.http.get<product[]>(
      'http://localhost:3000/laptop_product_list?_limit=15'
    );
  }

  getLaptopProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/laptop_product_list/${id}`
    );
  }

  mouseProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/mouse_product_list?_limit=15'
    );
  }

  getMouseProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/mouse_product_list/${id}`
    );
  }

  printerProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/printer_product_list?_limit=15'
    );
  }

  getPrinterProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/printer_product_list/${id}`
    );
  }

  monitorProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/monitor_product_list?_limit=15'
    );
  }

  getMonitorProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/monitor_product_list/${id}`
    );
  }

  acProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/ac_product_list?_limit=15'
    );
  }

  getACProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/ac_product_list/${id}`
    );
  }

  refridgeratorProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/refridgerator_product_list?_limit=15'
    );
  }

  getRefridgeratorProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/refridgerator_product_list/${id}`
    );
  }

  tvProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/tv_product_list?_limit=15'
    );
  }

  getTVProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/tv_product_list/${id}`
    );
  }

  wmProductList() {
    return this.http.get<product[]>(
      'http://localhost:3000/wm_product_list?_limit=15'
    );
  }

  getWMProductList(id: string) {
    return this.http.get<product>(
      `http://localhost:3000/wm_product_list/${id}`
    );
  }

  /*
    The code defines a function named searchProduct that takes a string parameter query. This function is likely part of a larger 
    class that has a property named http which is an instance of an HTTP client. 
    The function makes an HTTP GET request to the URL http://localhost:3000/products?q=<span class="math-inline">\{query\}\ 
    and returns the response as an array of `product` objects.

    Here's a breakdown of the code:
    1. **Function Definition:** `searchProduct(query: string)`
    - This line defines a function named `searchProduct` that takes a single parameter `query` of type `string`.
    2. **HTTP GET Request:** `this.http.get<product[]>(`
    - This line makes an HTTP GET request using the `http` property of the class. The `<product[]>` syntax indicates that the 
    expected response type is an array of `product` objects.
    3. **URL Construction:** `http://localhost:3000/products?q={query}`
    This line constructs the URL for the HTTP GET request. It uses string interpolation to insert the value of the query parameter 
    into the URL.

    Returning Response: );
    This line completes the function definition and returns the response of the HTTP GET request.
    In summary, the searchProduct function takes a search query, makes an HTTP GET request to a server to search for products 
    matching that query, and returns the results as an array of product objects.
  */

  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }
}
