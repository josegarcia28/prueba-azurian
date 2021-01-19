import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { userService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild(ListarComponent) lista: ListarComponent;
  public page_title: string;
  public user: User = new User();
  public status: string;
  public cambio: string;

  constructor(private _userService: userService) {
    this.page_title = 'Registrate';
   }

  ngOnInit(): void {
    this.cambio = 'Guardar';
  }

  loadEdit(id: number){
    this._userService.getUser(id).subscribe(
      resp => {
        this.user = resp.users;
        this.cambio = 'Actualizar';
      }
    )
  }

  onSubmit(form: NgForm){
    if(this.cambio === 'Guardar'){
      this._userService.register(this.user).subscribe( 
        resp => {
          if(resp){
            this.status = 'success';
            this.lista.getUsers();
            form.reset();
          } else {
            this.status = 'error';
          }
        },
        error => {
          console.log(error);
        }
      );

    } else {
      this._userService.update(this.user).subscribe(
        resp => {
          if(resp){
            this.status = 'success';
            this.lista.getUsers();
            form.reset();
          } else {
            this.status = 'error';
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
