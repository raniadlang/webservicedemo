import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
    selector:'ptab',
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']

})
export class PtabComponent
{
    parr:Product[];
    flag=false;
    ob:Product;
    num:number=1;

    displayForm(){
        this.flag=true;
    }
    constructor(private pservice:ProductService)
    {

    }
    ngOnInit(){
        this.pservice.getAllProduct()
        .subscribe(result=>this.parr=result);
        
    }

    updateProduct(p:Product){
        this.flag=true;
        this.ob=p;
    }

    deleteProduct(p:Product)
    {
        this.pservice.deleteProduct(p).subscribe(
            result=>this.parr=result);
    }


}
 