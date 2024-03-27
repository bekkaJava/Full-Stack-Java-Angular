import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private baseUrl = "http://localhost:8080/api/v1/users";

  constructor(private Http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.Http.get<User[]>(`${this.baseUrl}/`);
  }

  getUserById(id: number): Observable<User> {
    return this.Http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.Http.post<User>(`${this.baseUrl}/`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.Http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  deleteById(id: number): Observable<any> {
    return this.Http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
