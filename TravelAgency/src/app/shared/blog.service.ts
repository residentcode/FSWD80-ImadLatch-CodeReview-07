import { Injectable } from '@angular/core';
import {Posts} from './posts-mock';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() { }

  getPosts(){
    return Posts;
  }
}
