import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SearchComponent } from './components/search/search.component'
import { UserComponent } from './components/user/user.component'

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'user/:username', component: UserComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
