import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public users: User;
  public statusEli: string;
  public statusEdi: string;
  public status: string;
  @Input() modo: boolean = false;
  @Output() edit: EventEmitter<number>;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _userService: userService) { 
      this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers().subscribe(
      resp =>{
        if(resp.users){
          this.status = 'success';
          this.users = resp.users;
        } else {
          this.status = 'error';
        }
        },
      error =>{
        this.status = 'error';
        console.log(error);
      }
    );
  }

  deleteUser(id: number){
    this._userService.delete(id).subscribe(
      resp => {
        this.statusEli = 'success';
        this.getUsers();
      },
      error => {
        this.statusEli = 'error';
        console.log(error);
      }
    )
  }

  editar(id: number){
    this.edit.emit(id);
  }

}
