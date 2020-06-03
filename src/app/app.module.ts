import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { AnimeListComponent } from './anime-list/anime-list.component';
import {RoutingModule} from './routing/routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AnimeCardComponent } from './anime-card/anime-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    AnimeListComponent,
    AnimeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
