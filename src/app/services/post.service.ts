import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }
  allPost(){
   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
