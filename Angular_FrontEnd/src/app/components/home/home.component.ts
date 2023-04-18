import { Component, OnInit } from '@angular/core';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private fakestore:FakestoreService){}

  products:any[]=[];

  ngOnInit(){
    this.fakestore.getProduct()
      .subscribe((products:any)=>{
      console.table(products);
      this.products=products;
    })
  }

}
