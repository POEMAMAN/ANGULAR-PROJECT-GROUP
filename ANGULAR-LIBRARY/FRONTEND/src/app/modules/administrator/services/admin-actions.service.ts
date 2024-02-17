import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../products/interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {

constructor(private http: HttpClient) { }

createProduct(product: any){
  return this.http.post('http://localhost:8084/api/products/post', product)
}

getProducts(){
  return this.http.get('http://localhost:8084/api/products')
}

getProductById(id: string){
  return this.http.get(`http://localhost:8084/api/products/${id}`)
}

editProduct(id: string, productToEdit: FormData){
  return this.http.patch<Producto>(`http://localhost:8084/api/products/edit/${id}`, productToEdit)
}

}
