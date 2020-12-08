import { Injectable } from "@angular/core";
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable(
    
)
export class ProductService{
    baseUrl="http://localhost:8080/MyRestProductWebService/";

    constructor(private httpC:HttpClient)
    {

    }
    getAllProduct():Observable<Product[]>
    {
        return this.httpC.get<Product[]>(this.baseUrl+"products");
    }

    addProduct(p:Product):Observable<Product[]>{
        return this.httpC.post<Product[]>(this.baseUrl + "products", p);
    }
    
    updateProduct(p:Product):Observable<Product[]>
    {
       return this.httpC.put<Product[]>(this.baseUrl+"products",p);
    }

    deleteProduct(p:Product):Observable<Product[]>{
        return this.httpC.delete<Product[]>(this.baseUrl+"products/"+p.pid);
    }
}