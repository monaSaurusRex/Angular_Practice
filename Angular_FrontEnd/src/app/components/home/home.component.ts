import { Component } from '@angular/core';
import { FakeStoreAPIService } from 'src/app/services/fake-store-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private fakestore:  FakeStoreAPIService){}

  products:any[]=[];

  // ngOnInit():void{
  //   this.fakestore.getItems().subscribe((this.products:any)=>{
  //     console.table
  //     this.products = this.products;
  //   })
  // }
}
