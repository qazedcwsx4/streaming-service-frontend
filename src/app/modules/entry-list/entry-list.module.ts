import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryListComponent} from './entry-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {EntryCardComponent} from './entry-card/entry-card.component';


@NgModule({
  declarations: [
    EntryListComponent,
    EntryCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexModule
  ]
})
export class EntryListModule {
}
