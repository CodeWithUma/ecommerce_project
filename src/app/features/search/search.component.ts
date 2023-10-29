import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../data-type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult: undefined | product[];
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  /*
  The code snippet appears to be from an Angular application and represents the ngOnInit lifecycle hook of a component. 
  The ngOnInit hook is called when a component is initialized, and it's a common place to perform initialization tasks.

  Here's a breakdown of the code:

  Retrieving Query Parameter: let query = this.activeRoute.snapshot.paramMap.get('query');

  This line retrieves the value of the query parameter from the current route using the activeRoute and paramMap properties. 
  It assigns the value to a variable named query.

  Conditional Search and Subscription: query && this.product.searchProduct(query).subscribe((result)=>{

  This line checks if the query variable has a value (not null or undefined). If it does, it calls the searchProduct function 
  with the query value and subscribes to the observable returned by the function.
  Handling Search Results: this.searchResult=result;

  This line is executed when the observable emits a value (the search results). It assigns the emitted value (the result parameter) 
  to the component's searchResult property.
  Closing Subscription Block: });

  This line closes the subscription block.
  In summary, the code retrieves the search query from the route parameters, performs a product search using the searchProduct function if a query exists, and updates the component's searchResult property with the search results.
  */
  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query &&
      this.product.searchProduct(query).subscribe((result) => {
        this.searchResult = result;
      });
  }
}
