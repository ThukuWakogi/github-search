import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UserService } from 'src/app/services/user/user.service'
import { User } from 'src/app/models/user/user'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User()

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const username = this.route.snapshot.paramMap.get('username')
    console.log({username})
    this.user = this.userService.getUser(username)
    this
      .userService
      .userChange
      .subscribe(user => {this.user = user})
  }

  ngOnInit() {
  }
}
