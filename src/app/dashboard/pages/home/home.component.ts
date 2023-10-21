import { Component } from '@angular/core';
import { User } from '../users/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    const getUsersPromise = new Promise((resolve, reject)=>{
      const users :  User[] = [
        {
          id : 1,
          name: 'karen',
          email: 'karen@gmail.com',
          lastName: 'negrita'
        }
      ]
      setTimeout(()=> {
        //si el servidor responde rapido
        //podriamos usar un resolve
        //condicion si el servidor se demora más de 5 segundos
        reject(users)

      },  5000)
    })
    getUsersPromise
      .then((res)=>{
        console.log(res)
      })
      .catch((error)=>{ 
        console.log('algo salio mal')
      })

      console.log('holaaa')
  }
}
