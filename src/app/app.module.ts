import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { SuiModule, SuiSearchModule } from '@aligorji/ng2-semantic-ui'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    SuiSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
