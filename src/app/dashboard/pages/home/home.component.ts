import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy { 

  clocksSubscription: Subscription
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

      this.clocksSubscription = this.getClock().subscribe({
        next: (tiempo)=>{
          console.log('que pasara aqui', tiempo)
        },       

      })
      
      
  }
  ngOnDestroy(): void {
   this.clocksSubscription.unsubscribe()
    
  }
  getClock(): Observable<Date>{
    return new Observable((suscriber)=>{
      setInterval(()=>{
        suscriber.next(new Date())
        
      }, 1000)
    })
  }
}
