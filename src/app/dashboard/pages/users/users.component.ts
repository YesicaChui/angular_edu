import { Component } from '@angular/core';


import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = ''
  testUser: User = {
    id: 1,
    name: 'Karen',
    lastName: 'Chuki',
    email: 'karen@gmail'
  }
  testUser2: User = {
    id: 2,
    name: 'Michina',
    lastName: 'Miauuu',
    email: 'michi@gmail'
  }
  users: User[] = [
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
  constructor(private matDialog: MatDialog) {

  }
  openUsersDialog(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (valor) => {
        console.log(valor)
        console.log("wilson")



        console.log(`Escribiste esto ${valor}`)
        if (valor) {          
          this.users = [
            ...this.users,
            {...valor, id:new Date().getTime()}
          ]

        }
      }
    })
  }

  onDelete(userId:number):void{
    this.users=this.users.filter(user=>user.id!==userId)
  }

  onEditUser(user:User):void{
    console.log(user)
    this.matDialog.open(UsersDialogComponent,{data:user}).afterClosed().subscribe({
      next:(valor)=>{
        if(valor){
          const arrayNuevo=[...this.users]
          const indiceToEdit = arrayNuevo.findIndex((elemento)=>elemento.id===user.id)
          arrayNuevo[indiceToEdit] = {...arrayNuevo[indiceToEdit],...valor}
          this.users=[...arrayNuevo]
        }
      }
    })
  }


}
