import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  url ='https://jsonplaceholder.typicode.com/posts';


  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url)
  };

  createPost(heading: HTMLInputElement){
    return this.httpClient.post(this.url, JSON.stringify(heading));
  };

  deletePost(id: any){
    return this.httpClient.delete(this.url, + '/' + id)
  };
}