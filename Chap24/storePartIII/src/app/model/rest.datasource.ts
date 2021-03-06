import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSourceService {

  constructor(private http: HttpClient, @Inject(REST_URL) private url: string){

  }

  sendRequest<T>(verb: string, url: string, body?: Product): Observable<T> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set("Access-Key","<myAuthToken>");
    myHeaders = myHeaders.set("Application-Names",["storePartIII","whateEverOtherApp"]);
    return this.http.request<T>(verb,url,{body:body,headers:myHeaders}).pipe(catchError( (error: Response) => throwError(`Network error: ${error.statusText} (${error.status})`) ));
  }

  getData(): Observable<Product[]> {
    return this.sendRequest<Product[]>('GET',this.url);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>('POST',this.url,product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>('PUT',`${this.url}/${product.id}`,product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest<Product>('DELETE',`${this.url}/${id}`);
  }

}
