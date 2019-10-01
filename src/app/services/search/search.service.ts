import { Injectable } from '@angular/core'

import axios from 'axios'
import { Subject } from 'rxjs'

import { environment } from 'src/environments/environment'
import { User } from 'src/app/models/user/user'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: User[] = []
  usersChange: Subject<User[]> = new Subject<User[]>()

  constructor() { }

  searchUsers(searchValue: string) {
    axios
      .get(
        `${environment.apiUrl}/search/users?q=${searchValue}&type=users`
        // {
        //   headers: {
        //     Authorization: `token ${environment.apiAccessKey}`
        //   }
        // }
      )
      .then(res => {
        const body = res.data
        this.clearUsers()
        res.data.items.forEach(_user => {
          this.users.push(new User(
            _user.avatar_url,
            _user.events_url,
            _user.followers_url,
            _user.following_url,
            _user.gists_url,
            _user.gravatar_id,
            _user.html_url,
            _user.id,
            _user.login,
            _user.node_id,
            _user.organizations_url,
            _user.received_events_url,
            _user.repos_url,
            _user.score,
            _user.site_admin,
            _user.starred_url,
            _user.subscriptions_url,
            _user.type,
            _user.url
          ))
        })
        this.usersChange.next(this.users)
      })
      .catch(err => console.error({err}))
  }

  getUsers() {return this.users}

  clearUsers() {this.users = []}
}
