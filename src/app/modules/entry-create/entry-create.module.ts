import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryCreateComponent} from './entry-create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MalDownloaderComponent} from './mal-downloader/mal-downloader.component';
import {FilePickerComponent} from './file-picker/file-picker.component';
import {EntryFormComponent} from './entry-form/entry-form.component';
import {FormsModule} from '@angular/forms';
import {FileRowComponent} from './file-picker/file-row/file-row.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    EntryCreateComponent,
    MalDownloaderComponent,
    FilePickerComponent,
    EntryFormComponent,
    FileRowComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlexModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class EntryCreateModule {
}
