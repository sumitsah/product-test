import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string;
  products : Product[];
  productDetails: Product;

  constructor(private productService: ProductService,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( param => this.name = param['name'])
    this.getProduct();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '320px',
      height: '320px',
      data: { name : '', rate: '', id: '', quality:''}
    });

    dialogRef.afterClosed().subscribe((action) => {
     this.productDetails = dialogRef.componentInstance.data;
     action === 'Add' ? this.products.push(this.productDetails) : '';
    });

  }

  getProduct(){
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  
  delete(product: Product, index: number): void {
    this.products.splice(index, 1);
    console.log(JSON.stringify(product) + 'Deleted!');
  }

}
