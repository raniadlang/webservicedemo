import {Component, Output,EventEmitter, Input, SimpleChanges} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:'pform',
    templateUrl:'./pform.component.html',
    styleUrls:['./pform.component.css']
})
export class PformComponent{
    pid:number;
    name:string;
    price:number;
    parr:Product[];
    @Output() myevent=new EventEmitter();
    @Output() myevent1= new EventEmitter();
    @Input("upob") prod:Product;
    constructor(private pservice:ProductService){
        
    }
    
   ngOnChanges(change:SimpleChanges){
       if(change["prod"].currentValue!=change["prod"].previousValue){
           this.pid=this.prod.pid;
           this.name=this.prod.name;
           this.price=this.prod.price;
       }
   }

    addProduct(){
        let p=new Product(this.pid,this.name,this.price);
        this.pservice.addProduct(p).subscribe(
            (result)=>{this.parr=result;
                    this.myevent.emit(this.parr) ;
                    this.myevent1.emit(false);
            
            });
        //console.log(this.parr);
        this.pid=0;
        this.name="";
        this.price=0;
    }
    updateProduct(){
        let p=new Product(this.pid,this.name,this.price);
        this.pservice.updateProduct(p) .subscribe
        (
            (result)=>{this.parr=result;
                    this.myevent.emit(this.parr) ;
                    this.myevent1.emit(false);
            
            });
        }
   

}