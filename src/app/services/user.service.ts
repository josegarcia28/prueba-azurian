import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class userService {
  public url: string;
  users: User[] = [];

  constructor( public _http: HttpClient) { 
    this.url = global.url;
  }

  register(user: User): Observable<any>{
    return this._http.post(this.url+'register', user).
    pipe(
      map( (resp: any) => {
          user.id = resp.name;
          return user;
        })
      );
  }

  update(user: User): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this._http.put(this.url+'edit/'+user.id, user);
  }


  getUsers():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url+'users/list', {headers: headers});
   
  }

  getUser(id: number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url+'user/'+id, {headers: headers});
  }

  delete(id: number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.delete(this.url+'remove/'+id, {headers: headers});
  }
}


