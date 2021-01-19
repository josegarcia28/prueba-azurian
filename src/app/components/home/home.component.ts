import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: User;
  public status: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _userService: userService) { 


  }

  ngOnInit(): void {
    
  }

  
}
