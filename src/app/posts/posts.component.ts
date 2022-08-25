import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

//SEPARATION OF CONCERN:
//1. Having all our methods from .html file stored inside the class violates separation of concern principles.
//2. Such a class is hard to maintain and hard to test
//3. Getting the data by constructing the url for each method and updating changinges would be difficult in a very large application
//4. You don't want to have a live-server up and running during testing and that may fail.
//SOLUTION
//1. create a new service class responsible for https services. this class would house: all the methods in the component.
//2. This class would work with the backend.
//BENEFITS:
//1. When you want unit-test component, you can create a FakeServe implementaion of the service that does not make http calls to the server and run thousands of unit-tests in a split second.
//2. When you want update a method, you can do it in the service and it automatically reflect across board

export class PostsComponent implements OnInit {
  post: any[];
  url = 'https://jsonplaceholder.typicode.com/posts';

  

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response: {json: () => any;}) => {
        this.post = response.json();
    });

    // createPost(post){
    this.service.createPost(input.value)
      .subscribe((res: {json: () => any;}) => {
       this.post = res.json();
        this.post.splice(0, 0, this.post);
      })
    };

    deletePost(post){
      this.service.deletePost(post.id)
      .subscribe(res => {
        let index = this.post.indexOf(post);
        this.post.splice(index, 1);
    });
    };


  }
}

