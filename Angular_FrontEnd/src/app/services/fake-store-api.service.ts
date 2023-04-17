import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FakeStoreAPIService {

  constructor(private http: HttpClient) { }

  getItems(){
    this.http.get('https://fakestoreapi.com/products');
  }


}
