import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from '../../models/user.model';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user: User;
  public status: string;

  constructor(private route: ActivatedRoute,
              private _userService: userService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._userService.getUser(id).subscribe(
      resp => {
        this.user = resp.users;
        //console.log(this.user);
        this.status = 'success';
      },
      error => {
        this.status = 'error';
        console.log(error);
      }

    )
  }

}
