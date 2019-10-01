import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UserService } from 'src/app/services/user/user.service'
import { User } from 'src/app/models/user/user'
import { RepositoryService } from 'src/app/services/repository/repository.service'
import { Repository } from 'src/app/models/repository/repository'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User()
  repositories: Repository[] = []

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private repositoryService: RepositoryService
  ) {
    const username = this.route.snapshot.paramMap.get('username')
    this.user = this.userService.getUser(username)
    this.repositories = this.repositoryService.getRepositories(username)
    this
      .userService
      .userChange
      .subscribe(user => {this.user = user})
    this
      .repositoryService
      .repositoriesChange
      .subscribe(repositories => this.repositories = repositories)
  }

  ngOnInit() {
  }
}
