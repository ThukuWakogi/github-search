import { Injectable } from '@angular/core'

import axios from 'axios'

import { environment } from 'src/environments/environment'
import { Repository } from 'src/app/models/repository/repository'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repositories: Repository[] = []
  repositoriesChange: Subject<Repository[]> = new Subject<Repository[]>()

  constructor() { }

  fetchRepositories(username: string) {
    this.clearRepositories()
    axios
      .get(`${environment.apiUrl}/users/${username}/repos`)
      .then(res => {
        const body = res.data
        res.data.forEach((_repository: any) => {
          this.repositories.push(new Repository(
            _repository.archived,
            _repository.branches_url,
            _repository.clone_url,
            _repository.content_url,
            _repository.created_at,
            _repository.description,
            _repository.fork,
            _repository.forks,
            _repository.forks_count,
            _repository.full_name,
            _repository.name,
            _repository.owner
          ))
        });
        this.repositoriesChange.next(this.repositories)
        const repos = this.repositories
      })
      .catch(err => console.error(err)
      )
  }

  clearRepositories() {
    this.repositories = []
    this.repositoriesChange.next(this.repositories)
  }

  getRepositories(username: string) {
    this.fetchRepositories(username)
    return this.repositories
  }
}
