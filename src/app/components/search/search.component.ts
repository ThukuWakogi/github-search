import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = ''
  users: User[]

  constructor(private searchService: SearchService) {
    this
      .searchService
      .usersChange
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.users = this
      .searchService
      .getUsers()
  }

  onSubmit() {this.searchService.searchUsers(this.searchValue)}
}
