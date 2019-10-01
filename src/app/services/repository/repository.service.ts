import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() { }

  fetchRepositories(username: string) {
    axios
      .get(`${environment.apiUrl}/users/${username}/repos`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err)
      )
  }
}
