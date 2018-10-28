import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-google-user',
  templateUrl: './google-user.component.html',
  styleUrls: ['./google-user.component.css']
})
export class GoogleUserComponent implements OnInit {
  sub: any;
	p_id: '';
  // constructor() { }
	constructor( private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
			this.p_id = params.id;
      console.log(this.p_id);
      this.userService.getProfileById(this.p_id).subscribe(data => {
      })
    })
  }

}
