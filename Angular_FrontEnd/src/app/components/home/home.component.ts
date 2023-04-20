import { Component, OnInit } from '@angular/core';
import { FakestoreService } from 'src/app/services/fakestore.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private fakestore:FakestoreService, private router:Router){} //inject the service you want to use

  products:Product[]=[]; //values that you will be using 
  //products:Product[] = []; 

  ngOnInit(){
    this.fakestore.getAll()
      .subscribe((products:any)=>{ //arrow functions are already in the format of a promise
      console.table(products);
      this.products=products;
    })
  } 

  goToCreate(){
    this.router.navigate(['/create']);
  }


}
