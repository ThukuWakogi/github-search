import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { SuiModule, SuiSearchModule } from '@aligorji/ng2-semantic-ui'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { DateFormatPipe } from './utils/pipes/date-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    DateFormatPipe
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
