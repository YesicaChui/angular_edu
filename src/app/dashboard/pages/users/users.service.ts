import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  getUsers(): User[]{
    return [
      {
        id: 1,
        name: 'Karen',
        lastName: 'Callisaya',
        email: 'karen@gmail'
      },
      {
        id: 2,
        name: 'Michina',
        lastName: 'Miauuu',
        email: 'michi@gmail'
      }
    ]
  }
}
