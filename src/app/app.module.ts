import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './modules/routing/routing.module';
import {EntryListModule} from './modules/entry-list/entry-list.module';
import {LoginModule} from './modules/login/login.module';
import {ToolbarModule} from './modules/toolbar/toolbar.module';
import {EntryCreateModule} from './modules/entry-create/entry-create.module';
import {FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EntryCreateModule,
    HttpClientModule,
    RoutingModule,
    EntryListModule,
    LoginModule,
    ToolbarModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
