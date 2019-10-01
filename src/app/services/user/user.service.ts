import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { Subject } from 'rxjs';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User
  userChange: Subject<User> = new Subject<User>()

  constructor() { }

  fetchUser(username: string) {
    axios
      .get(`${environment.apiUrl}/users/${username}`)
      .then(res => {
        this.user = new User(
          res.data.avatar_url,
          res.data.events_url,
          res.data.followers_url,
          res.data.following_url,
          res.data.gists_url,
          res.data.gravatar_id,
          res.data.html_url,
          res.data.id,
          res.data.login,
          res.data.node_id,
          res.data.organizations_url,
          res.data.received_events_url,
          res.data.repos_url,
          res.data.score,
          res.data.site_admin,
          res.data.starred_url,
          res.data.subscriptions_url,
          res.data.type,
          res.data.url,
          res.data.bio,
          res.data.blog,
          res.data.company,
          res.data.createdAt,
          res.data.email,
          res.data.followers,
          res.data.following,
          res.data.hireable,
          res.data.location,
          res.data.name,
          res.data.public_gist,
          res.data.public_repos,
          res.data.updated_at
        )
        this.userChange.next(this.user)
      })
      .catch(err => console.error({err}))
  }

  getUser(username: string) {
    this.fetchUser(username)
    return this.user
  }
}
